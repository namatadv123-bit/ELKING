import fs from 'fs';
import path from 'path';

function extractProducts() {
  const content = fs.readFileSync(path.resolve('src/data/products.ts'), 'utf8');
  
  // Handle Array.from pattern: Array.from({ length: 20 }).map((_, i) => ({ ... }))
  const lengthMatch = content.match(/length:\s*(\d+)/);
  if (lengthMatch) {
    const count = Number(lengthMatch[1]);
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        slug: `product-${i}`,
        name: `موديل مصنع الكينج رقم ${i}`,
        price: 100,
        image_url: `/images/product-${i}.webp`,
        description: "أجود أنواع القطن المصري، ملمس ناعم ومريح جداً للأطفال.",
        is_featured: i <= 4,
      });
    }
    return products;
  }
  
  // Fallback: try regex extraction from static array
  const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const names = [...content.matchAll(/name:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const prices = [...content.matchAll(/price:\s*(\d+)/g)].map(m => Number(m[1]));
  const images = [...content.matchAll(/image_url:\s*["']([^"']+)["']/g)].map(m => m[1]);
  
  return slugs.map((slug, i) => ({
    slug,
    name: names[i] || `منتج ${i+1}`,
    price: prices[i] || 100,
    image_url: images[i] || `/images/product-${i+1}.webp`,
    description: "أجود أنواع القطن المصري.",
    is_featured: i < 4,
  }));
}

function extractArticles() {
  const articlesPath = path.resolve('src/data/articles.ts');
  if (!fs.existsSync(articlesPath)) return [];
  
  const content = fs.readFileSync(articlesPath, 'utf8');
  const match = content.match(/export const staticArticles.*?=\s*\[([\s\S]*?)\n\];/);
  if (!match) return [];
  
  const text = match[1];
  const articles = [];
  
  // Match each article object
  const objectMatches = [...text.matchAll(/\{([\s\S]*?)\}/g)];
  for (const objMatch of objectMatches) {
    const obj = objMatch[1];
    const slug = obj.match(/slug:\s*["']([^"']+)["']/)?.[1];
    const title = obj.match(/title:\s*["']([^"']+)["']/)?.[1];
    const excerpt = obj.match(/excerpt:\s*["']([^"']+)["']/)?.[1];
    const image_url = obj.match(/image_url:\s*["']([^"']+)["']/)?.[1];
    
    if (slug && title) {
      articles.push({ slug, title, excerpt: excerpt || '', image_url: image_url || '' });
    }
  }
  
  return articles;
}

function generatePages() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("dist/index.html not found!");
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const products = extractProducts();
  const articles = extractArticles();

  console.log(`Generating SEO pages for ${products.length} products and ${articles.length} articles...`);

  // Product Pages
  const productsDir = path.join(distDir, 'products');
  if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });

  products.forEach(product => {
    const productDir = path.join(productsDir, product.slug);
    if (!fs.existsSync(productDir)) fs.mkdirSync(productDir, { recursive: true });
    
    let html = baseHtml;
    const title = `${product.name} - مصنع الكينج`;
    const description = `تسوق ${product.name} بأسعار جملة من مصنع الكينج. ${product.description}`.substring(0, 160);
    const image = `https://elkingclo.com${product.image_url}`;
    
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": [image],
      "description": description,
      "sku": product.slug,
      "brand": { "@type": "Brand", "name": "مصنع الكينج" },
      "offers": {
        "@type": "Offer",
        "url": `https://elkingclo.com/products/${product.slug}`,
        "priceCurrency": "EGP",
        "price": product.price,
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    };

    const seoTags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta property="og:type" content="product" />
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="https://elkingclo.com/products/${product.slug}">
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    `;
    
    html = html.replace(/<title>.*?<\/title>/s, '');
    html = html.replace(/<meta name="description".*?>/s, '');
    html = html.replace(/<meta property="og:.*?".*?>/sg, '');
    html = html.replace(/<meta name="twitter:.*?".*?>/sg, '');
    html = html.replace('</head>', `${seoTags}</head>`);
    
    fs.writeFileSync(path.join(productDir, 'index.html'), html);
  });

  // Article Pages
  const articlesDir = path.join(distDir, 'articles');
  if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir, { recursive: true });

  articles.forEach(article => {
    const articleDir = path.join(articlesDir, article.slug);
    if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });
    
    let html = baseHtml;
    const title = `${article.title} - مدونة مصنع الكينج`;
    const description = article.excerpt.substring(0, 160) || `اقرأ ${article.title} على موقع مصنع الكينج.`;
    const image = article.image_url.startsWith('/') ? `https://elkingclo.com${article.image_url}` : article.image_url || 'https://elkingclo.com/hero-main.webp';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "image": [image],
      "datePublished": "2024-10-12",
      "author": { "@type": "Organization", "name": "مصنع الكينج", "url": "https://elkingclo.com" }
    };

    const seoTags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="https://elkingclo.com/articles/${article.slug}">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    `;
    
    html = html.replace(/<title>.*?<\/title>/s, '');
    html = html.replace(/<meta name="description".*?>/s, '');
    html = html.replace(/<meta property="og:.*?".*?>/sg, '');
    html = html.replace(/<meta name="twitter:.*?".*?>/sg, '');
    html = html.replace('</head>', `${seoTags}</head>`);
    
    fs.writeFileSync(path.join(articleDir, 'index.html'), html);
  });

  console.log("SEO pages generated successfully!");
}

generatePages();
