import fs from 'fs';
import path from 'path';

// Helper to extract data from TS exports
function extractDataFromTS(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract staticProducts - find array boundaries
  let products = [];
  let articles = [];
  
  try {
    const productsMatch = content.match(/export const staticProducts: Product\[\] = \[([\s\S]*?)\n\];/);
    if (productsMatch) {
      const text = productsMatch[1];
      const slugs = [...text.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
      const names = [...text.matchAll(/name:\s*["']([^"']+)["']/g)].map(m => m[1]);
      const prices = [...text.matchAll(/price:\s*(\d+)/g)].map(m => Number(m[1]));
      const images = [...text.matchAll(/image_url:\s*["']([^"']+)["']/g)].map(m => m[1]);
      const descriptions = [...text.matchAll(/description:\s*["']([\s\S]*?)["'],/g)].map(m => m[1].substring(0, 160));
      const isFeatureds = [...text.matchAll(/is_featured:\s*(true|false)/g)].map(m => m[1] === 'true');
      
      for (let i = 0; i < slugs.length; i++) {
        products.push({
          slug: slugs[i],
          name: names[i] || `منتج ${i+1}`,
          price: prices[i] || 150,
          image_url: images[i] || '',
          description: descriptions[i] || '',
          is_featured: isFeatureds[i] || false,
        });
      }
    }
  } catch(e) { console.error("Error parsing products:", e.message); }

  try {
    if (fs.existsSync(path.resolve('src/data/articles.ts'))) {
      const artContent = fs.readFileSync(path.resolve('src/data/articles.ts'), 'utf8');
      const artMatch = artContent.match(/export const staticArticles: Article\[\] = \[([\s\S]*?)\n\];/);
      if (artMatch) {
        const text = artMatch[1];
        const slugs = [...text.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
        const titles = [...text.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
        const excerpts = [...text.matchAll(/excerpt:\s*["']([^"']+)["']/g)].map(m => m[1]);
        const images = [...text.matchAll(/image_url:\s*["']([^"']+)["']/g)].map(m => m[1]);
        
        for (let i = 0; i < slugs.length; i++) {
          articles.push({ slug: slugs[i], title: titles[i], excerpt: excerpts[i], image_url: images[i] });
        }
      }
    }
  } catch(e) { console.error("Error parsing articles:", e.message); }

  return { products, articles };
}

function generatePages() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("dist/index.html not found! Run build first.");
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  let { products, articles } = extractDataFromTS(path.resolve('src/data/products.ts'));

  console.log(`Generating SEO pages for ${products.length} products and ${articles.length} articles...`);

  // --- Generate Product Pages ---
  const productsDir = path.join(distDir, 'products');
  if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });

  products.forEach(product => {
    if (!product.slug) return;
    
    const productDir = path.join(productsDir, product.slug);
    if (!fs.existsSync(productDir)) fs.mkdirSync(productDir, { recursive: true });
    
    let html = baseHtml;
    const title = `${product.name} - مصنع الكينج`;
    const description = product.description ? product.description.replace(/<[^>]+>/g, '').substring(0, 160) : `تسوق ${product.name} بأسعار جملة من مصنع الكينج.`;
    const image = product.image_url.startsWith('/') ? `https://elkingclo.com${product.image_url}` : product.image_url || 'https://elkingclo.com/hero-main.webp';
    
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
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    `;
    
    html = html.replace(/<title>.*?<\/title>/s, '');
    html = html.replace(/<meta name="description".*?>/s, '');
    html = html.replace(/<meta property="og:.*?".*?>/sg, '');
    html = html.replace(/<meta name="twitter:.*?".*?>/sg, '');
    html = html.replace('</head>', `${seoTags}</head>`);
    
    fs.writeFileSync(path.join(productDir, 'index.html'), html);
  });

  // --- Generate Article Pages ---
  const articlesDir = path.join(distDir, 'articles');
  if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir, { recursive: true });

  articles.forEach(article => {
    if (!article.slug) return;
    
    const articleDir = path.join(articlesDir, article.slug);
    if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });
    
    let html = baseHtml;
    const title = `${article.title} - مدونة مصنع الكينج`;
    const description = article.excerpt ? article.excerpt.substring(0, 160) : `اقرأ ${article.title} على موقع مصنع الكينج.`;
    const image = article.image_url || 'https://elkingclo.com/hero-main.webp';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "image": [image],
      "datePublished": new Date().toISOString(),
      "author": [{
        "@type": "Organization",
        "name": "مصنع الكينج",
        "url": "https://elkingclo.com"
      }]
    };

    const seoTags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="https://elkingclo.com/articles/${article.slug}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
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
