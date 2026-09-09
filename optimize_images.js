import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');

async function processImages(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      await processImages(fullPath);
    } else if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
      const ext = path.extname(file.name);
      const basename = path.basename(file.name, ext);
      const webpPath = path.join(dir, `${basename}.webp`);

      console.log(`Processing: ${fullPath} -> ${webpPath}`);

      try {
        let pipeline = sharp(fullPath);
        const metadata = await pipeline.metadata();

        // Hero image: keep at 800px, products: 500px max
        const isHero = basename.includes('1ab01d34') || basename.includes('hero');
        const maxW = isHero ? 800 : 500;

        if (metadata.width > maxW) {
          pipeline = pipeline.resize(maxW, null, { withoutEnlargement: true });
        }

        await pipeline.webp({ quality: 78 }).toFile(webpPath);
        console.log(`Success: ${webpPath}`);
        
        // Remove old file to save space
        await fs.unlink(fullPath);
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

async function main() {
  try {
    console.log(`Starting image optimization in ${PUBLIC_DIR}...`);
    await processImages(PUBLIC_DIR);
    console.log('Finished image optimization.');
  } catch (err) {
    console.error('Fatal error:', err);
  }
}

main();
