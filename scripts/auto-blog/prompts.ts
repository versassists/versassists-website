export function buildTitlePrompt(category: string, existingTitles: string[]): string {
  const recentTitles = existingTitles
    .slice(0, 20)
    .map((t) => `  - "${t}"`)
    .join("\n");

  return `Generate 3 SEO-optimized blog post title options for the category "${category}" for VersAssist, a virtual assistant and AI consulting company for small businesses.

The titles should:
- Be 50-70 characters long
- Include the year ${new Date().getFullYear()} when appropriate
- Target long-tail keywords small business owners search for
- Be specific and actionable, not generic
- NOT be similar to these existing titles:
${recentTitles}

Return ONLY a JSON array of 3 strings, no other text.`;
}

export function buildContentPrompt(category: string, title: string): string {
  return `You are the lead content writer for VersAssist (versassists.com), a virtual assistant and AI consulting company for small businesses. Write a comprehensive, SEO-optimized blog post.

TOPIC: "${title}"
CATEGORY: ${category}

CONTENT REQUIREMENTS:
- 2,000-2,500 words minimum
- Conversational, authoritative tone - write as if you're a business consultant sharing expertise
- Use first-person sparingly ("I've seen...", "In my experience...")
- Include specific statistics, percentages, and data points (realistic but illustrative)
- Use real-world examples and mini case studies (fictional small businesses with names)

STRUCTURE (output as HTML):
1. Opening hook: Start with a compelling statistic or provocative statement
2. Introduction paragraph explaining why this topic matters for small businesses
3. 5-7 H2 sections, several with H3 subsections
4. Use <ul>/<ol> bullet lists generously - readers scan, not read linearly
5. Bold key terms and important phrases with <strong>
6. A dedicated section: <h2>How VersAssist Can Help Your Small Business</h2>
   - Explain how VersAssist's virtual assistant and AI services solve the problems discussed
   - Mention specific VersAssist service areas relevant to the topic
   - Include: <a href="https://calendly.com/versassist/30min">Book a free consultation</a>
7. Conclusion with actionable next steps and a final CTA

SEO REQUIREMENTS:
- Naturally incorporate the primary keyword 3-5 times
- Use related LSI keywords throughout
- Write a meta-description-quality opening paragraph
- Interlink opportunity: mention topics that small businesses care about

DO NOT:
- Use markdown - output must be valid HTML only
- Include <html>, <head>, <body> tags - just the article content
- Use inline styles
- Reference these instructions in the output

ALSO GENERATE (in a JSON block at the very end, after a "---JSON---" separator):
{
  "excerpt": "compelling 2-sentence summary under 300 characters",
  "readTime": "X min read",
  "imagePrompt": "detailed prompt for a professional, modern blog featured image related to the topic - photorealistic style, clean composition, business context, no text or words in the image"
}`;
}
