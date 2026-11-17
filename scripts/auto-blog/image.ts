import { createClient } from "@sanity/client";

// Gemini image models to try in order of preference.
// The old Imagen 4 models (imagen-4.0-*-generate-001) were retired and return 404.
const IMAGE_MODELS = [
  "gemini-3.1-flash-image",
  "gemini-2.5-flash-image",
];

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export async function generateAndUploadImage(
  imagePrompt: string,
  slug: string,
  client: ReturnType<typeof createClient>
): Promise<string | null> {
  try {
    console.log("  [image] Generating with Gemini image models...");

    let base64: string | undefined;
    let mimeType = "image/png";

    for (const model of IMAGE_MODELS) {
      console.log(`  [image] Trying ${model}...`);
      const url = `${BASE_URL}/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: imagePrompt }] }],
          generationConfig: {
            responseModalities: ["IMAGE"],
            imageConfig: { aspectRatio: "16:9" },
          },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`  [image] ${model} error (${res.status}): ${err.slice(0, 200)}`);
        continue; // try next model
      }

      const data = await res.json();
      const parts: Array<{ inlineData?: { data?: string; mimeType?: string } }> =
        data.candidates?.[0]?.content?.parts ?? [];
      const imagePart = parts.find((p) => p.inlineData?.data);
      base64 = imagePart?.inlineData?.data;
      if (imagePart?.inlineData?.mimeType) mimeType = imagePart.inlineData.mimeType;

      if (base64) break;
      console.error(`  [image] ${model} returned no image data`);
    }

    if (!base64) {
      console.error("  [image] All image models failed (post will publish without an image)");
      return null;
    }

    const buffer = Buffer.from(base64, "base64");
    const ext = mimeType.includes("jpeg") ? "jpg" : "png";

    console.log("  [image] Uploading to Sanity...");

    const asset = await client.assets.upload("image", buffer, {
      filename: `${slug}.${ext}`,
      contentType: mimeType,
    });

    console.log(`  [image] Uploaded: ${asset._id}`);
    return asset._id;
  } catch (err) {
    console.error("  [image] Failed:", (err as Error).message);
    return null;
  }
}
