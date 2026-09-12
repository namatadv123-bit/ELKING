import fs from 'fs';
import path from 'path';

function extractProducts() {
  const content = fs.readFileSync(path.resolve('src/data/products.ts'), 'utf8');
  const lengthMatch = content.match(/length:\s*(\d+)/);
  if (lengthMatch) {
    const count = Number(lengthMatch[1]);
    return Array.from({ length: count }, (_, i) => ({ slug: `product-${i + 1}` }));
  }
  const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  return slugs.map(slug => ({ slug }));
}

function extractArticles() {
  const articlesPath = path.resolve('src/data/articles.ts');
  if (!fs.existsSync(articlesPath)) return [];
  const content = fs.readFileSync(articlesPath, 'utf8');
  const match = content.match(/export const staticArticles.*?=\s*\[([\s\S]*?)\n\];/);
  if (!match) return [];
  const slugs = [...match[1].matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  return slugs.map(slug => ({ slug }));
}

function generateSitemap() {
  console.log("Generating dynamic sitemap...");
  const baseUrl = "https://elkingclo.com";
  const sitemapPath = path.resolve('public/sitemap.xml');
  const today = new Date().toISOString().split('T')[0];
  
  let urls = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/products', priority: 0.9, changefreq: 'daily' },
    { url: '/articles', priority: 0.8, changefreq: 'weekly' },
    { url: '/services', priority: 0.7, changefreq: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  ];

  extractProducts().forEach(p => {
    urls.push({ url: `/products/${p.slug}`, priority: 0.8, changefreq: 'weekly' });
  });

  extractArticles().forEach(a => {
    urls.push({ url: `/articles/${a.slug}`, priority: 0.7, changefreq: 'monthly' });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${baseUrl}${u.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(sitemapPath, xml.trim());
  console.log(`Sitemap generated with ${urls.length} URLs at ${sitemapPath}`);
}

generateSitemap();
