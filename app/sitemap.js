// app/sitemap.js

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // List your static routes here
  const staticPages = ['', 'projects'];

  return staticPages.map((page) => ({
    url: page ? `${baseUrl}/${page}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'yearly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
