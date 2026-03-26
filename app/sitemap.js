// app/sitemap.js

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // List your static routes here
  const staticPages = ['', 'about', 'contact'];

  const pages = staticPages
    .map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`)
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
