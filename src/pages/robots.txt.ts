// Reference our hand-built sitemap and let well-behaved crawlers in.
// AI-training crawlers are listed as commented blocks so the user can opt
// out without losing real-time AI browsing (ChatGPT-User, PerplexityBot).
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const body = `# Hand-built sitemap built from frontmatter.
Sitemap: https://infeeds.com/sitemap.xml

# Default: allow everything.
User-agent: *
Allow: /
Disallow: /404

# Optional: block AI-training crawlers. Real-time browsing bots
# (ChatGPT-User, PerplexityBot) are still allowed by default above.
# Uncomment to opt out of model-training crawls while keeping
# search-indexing crawlers (Googlebot, Bingbot) unaffected.

# User-agent: GPTBot
# Disallow: /
#
# User-agent: ClaudeBot
# Disallow: /
#
# User-agent: Bytespider
# Disallow: /
#
# User-agent: Google-Extended
# Disallow: /
#
# User-agent: CCBot
# Disallow: /
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};