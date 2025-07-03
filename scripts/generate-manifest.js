const fs = require('fs');
const path = require('path');

// Base directory for repository
const repoDir = path.join(__dirname, '..');
// Base URL for GitHub Pages
const baseUrl = 'https://hightensssion.github.io/astral-images';

const manifest = {};

// Define the paths to scan relative to the repository root
const pathsToScan = [
  { path: 'assets/members', category: 'Astral Solos' },
  { path: 'assets/pairings', category: 'Astral Pairings' },
  { path: 'pairings', category: 'Pairing Customs' },
  { path: 'pairings/gifs', category: 'Pairing Custom GIFS' },
  { path: 'singles', category: 'Solo Customs' },
  { path: 'singles/gifs', category: 'Solo Custom GIFS' }
];

// Scan directories and create manifest entries
function scanDirectory(dirPath, category) {
  const fullPath = path.join(repoDir, dirPath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Directory ${fullPath} does not exist. Skipping.`);
    return;
  }
  
  if (!manifest[category]) {
    manifest[category] = [];
  }
  
  try {
    const files = fs.readdirSync(fullPath);
    
    files.forEach(file => {
      const filePath = path.join(fullPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        // Convert Windows backslashes to forward slashes for URLs
        const relativePath = path.relative(repoDir, filePath)
            .replace(/\\/g, '/');
        
        manifest[category].push({
            src: `${baseUrl}/${relativePath}`,
            alt: file.replace(/\.[^/.]+$/, ""),
            category: category
        });
      }
    });
    
    console.log(`✓ Added ${manifest[category].length} images from ${category}`);
  } catch (error) {
    console.error(`Error scanning directory ${fullPath}:`, error);
  }
}

// Process each path
pathsToScan.forEach(({ path: dirPath, category }) => {
  scanDirectory(dirPath, category);
});

// Write manifest to file
const outputPath = path.join(repoDir, 'public/images-manifest.json');
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`\n✅ Image manifest generated successfully at ${outputPath}`);
console.log(`Total categories: ${Object.keys(manifest).length}`);
console.log(`Total images: ${Object.values(manifest).reduce((acc, arr) => acc + arr.length, 0)}`);