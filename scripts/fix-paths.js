const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const outDir = path.join(__dirname, '../out');

walk(outDir, (filePath) => {
  if (filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate relative path to root
    let relativePathToRoot = path.relative(path.dirname(filePath), outDir);
    if (relativePathToRoot === '') {
      relativePathToRoot = '.';
    }
    
    // Replace absolute paths with relative paths
    // This handles /_next/ and /images/ in both HTML tags and script content
    let nextReplacement = relativePathToRoot + '/_next/';
    let imagesReplacement = relativePathToRoot + '/images/';
    
    // Ensure we don't end up with .//_next/
    nextReplacement = nextReplacement.replace(/\/+/g, '/');
    imagesReplacement = imagesReplacement.replace(/\/+/g, '/');
    
    let relativeContent = content
      .replace(/\/_next\//g, nextReplacement)
      .replace(/\/images\//g, imagesReplacement);
    
    fs.writeFileSync(filePath, relativeContent);
    console.log(`Fixed paths in ${filePath}`);
  }
});

// Create .nojekyll file to ensure GitHub Pages doesn't ignore _next folder
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('Created .nojekyll');
