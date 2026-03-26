// app/sitemap.js

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dimuthadithya.site';

  // List your static routes here (add or remove paths if needed)
  const staticPages = ['', 'about', 'contact'];

  return staticPages.map((page) => ({
    url: page ? `${baseUrl}/${page}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'yearly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
