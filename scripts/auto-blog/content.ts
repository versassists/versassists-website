import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildContentPrompt, buildTitlePrompt } from "./prompts";
import type { GeneratedPost, Category } from "./types";

// Models to try in order of preference
const MODELS = ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-1.5-flash"];

let _genAI: GoogleGenerativeAI;
function getGenAI(): GoogleGenerativeAI {
  if (!_genAI)
    _genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  return _genAI;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 96);
}

async function callWithRetry(prompt: string): Promise<string> {
  for (const modelName of MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`  [gemini] Trying ${modelName} (attempt ${attempt})...`);
        const model = getGenAI().getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (err: unknown) {
        const status = (err as { status?: number }).status;
        if (status === 503 || status === 429) {
          console.log(`  [gemini] ${modelName} unavailable (${status}), waiting 10s...`);
          await new Promise((r) => setTimeout(r, 10000));
          continue;
        }
        if (status === 404) {
          console.log(`  [gemini] ${modelName} not available, trying next model...`);
          break; // skip to next model
        }
        throw err;
      }
    }
  }
  throw new Error("All Gemini models failed after retries");
}

export async function generateTitleCandidates(
  category: Category,
  existingTitles: string[]
): Promise<string[]> {
  const raw = await callWithRetry(buildTitlePrompt(category, existingTitles));
  const trimmed = raw.trim();
  const cleaned = trimmed.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "");
  return JSON.parse(cleaned);
}

export async function generateContent(
  category: Category,
  title: string
): Promise<GeneratedPost> {
  const raw = await callWithRetry(buildContentPrompt(category, title));

  // Split HTML body from JSON metadata
  let htmlBody: string;
  let metadata: { excerpt: string; readTime: string; imagePrompt: string };

  if (raw.includes("---JSON---")) {
    const parts = raw.split("---JSON---");
    htmlBody = parts[0].trim();
    const jsonStr = parts[1]
      .trim()
      .replace(/^```json?\s*/i, "")
      .replace(/\s*```$/i, "");
    metadata = JSON.parse(jsonStr);
  } else {
    const jsonMatch = raw.match(
      /\{[\s\S]*"excerpt"[\s\S]*"readTime"[\s\S]*\}\s*$/
    );
    if (jsonMatch) {
      htmlBody = raw.slice(0, jsonMatch.index).trim();
      metadata = JSON.parse(jsonMatch[0]);
    } else {
      htmlBody = raw.trim();
      const wordCount = htmlBody.split(/\s+/).length;
      metadata = {
        excerpt: title.slice(0, 300),
        readTime: `${Math.max(5, Math.round(wordCount / 250))} min read`,
        imagePrompt: `Professional modern business blog image about ${title}, clean composition, photorealistic`,
      };
    }
  }

  return {
    title,
    slug: slugify(title),
    category,
    excerpt: metadata.excerpt.slice(0, 300),
    readTime: metadata.readTime,
    htmlBody,
    imagePrompt: metadata.imagePrompt,
  };
}
