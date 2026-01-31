import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, 'docs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Convertir rutas absolutas a relativas
  // /_astro/ -> ./_astro/
  content = content.replace(/href="\/_astro\//g, 'href="./_astro/');
  content = content.replace(/src="\/_astro\//g, 'src="./_astro/');
  
  // /images/ -> ./images/
  content = content.replace(/src="\/images\//g, 'src="./images/');
  
  // /" -> "./"
  content = content.replace(/href="\/(?![\w-])/g, 'href="./');
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Procesado: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(filePath);
      }
    } else if (file.endsWith('.html')) {
      processFile(filePath);
    }
  }
}

console.log('🔄 Convirtiendo rutas absolutas a relativas...');
walkDir(docsDir);
console.log('✅ Listo!');
