import { createClient } from "@sanity/client";

// Imagen models to try in order of preference
const IMAGEN_MODELS = [
  "imagen-4.0-fast-generate-001",
  "imagen-4.0-generate-001",
];

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export async function generateAndUploadImage(
  imagePrompt: string,
  slug: string,
  client: ReturnType<typeof createClient>
): Promise<string | null> {
  try {
    console.log("  [image] Generating with Imagen 4...");

    let base64: string | undefined;

    for (const model of IMAGEN_MODELS) {
      console.log(`  [image] Trying ${model}...`);
      const url = `${BASE_URL}/${model}:predict?key=${process.env.GEMINI_API_KEY}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instances: [{ prompt: imagePrompt }],
          parameters: { sampleCount: 1, aspectRatio: "16:9" },
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`  [image] ${model} error (${res.status}): ${err.slice(0, 200)}`);
        continue; // try next model
      }

      const data = await res.json();
      base64 = data.predictions?.[0]?.bytesBase64Encoded;

      if (base64) break;
      console.error(`  [image] ${model} returned no image data`);
    }

    if (!base64) {
      console.error("  [image] All Imagen models failed");
      return null;
    }

    const buffer = Buffer.from(base64, "base64");

    console.log("  [image] Uploading to Sanity...");

    const asset = await client.assets.upload("image", buffer, {
      filename: `${slug}.png`,
      contentType: "image/png",
    });

    console.log(`  [image] Uploaded: ${asset._id}`);
    return asset._id;
  } catch (err) {
    console.error("  [image] Failed:", (err as Error).message);
    return null;
  }
}
