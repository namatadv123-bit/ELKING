import fs from 'fs';
import path from 'path';

function extractProductsFromTS() {
  const productsPath = path.resolve('src/data/products.ts');
  if (!fs.existsSync(productsPath)) return [];
  
  const content = fs.readFileSync(productsPath, 'utf8');
  const match = content.match(/export const staticProducts: Product\[\] = \[([\s\S]*?)\n\];/);
  if (!match) return [];
  
  const text = match[1];
  const slugs = [...text.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  return slugs.map(slug => ({ slug }));
}

function generateSitemap() {
  console.log("Generating dynamic sitemap...");
  const baseUrl = "https://elkingclo.com";
  const sitemapPath = path.resolve('public/sitemap.xml');
  
  let urls = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/products', priority: 0.9, changefreq: 'daily' },
    { url: '/articles', priority: 0.8, changefreq: 'weekly' },
    { url: '/services', priority: 0.7, changefreq: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  ];

  // Add static products
  const products = extractProductsFromTS();
  products.forEach(p => {
    urls.push({
      url: `/products/${p.slug}`,
      priority: 0.8,
      changefreq: 'weekly',
    });
  });

  // Generate XML
  const today = new Date().toISOString().split('T')[0];
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
