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
  // Process HTML, JS, CSS, and TXT files which may contain absolute paths
  if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.txt')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate relative path to root
    let relativePathToRoot = path.relative(path.dirname(filePath), outDir);
    if (relativePathToRoot === '') {
      relativePathToRoot = '.';
    }
    
    // For JS files, we want paths relative to the HTML root, not the JS file itself
    // Since all our HTML files are at the root (trailingSlash: false), we use './'
    let prefix = relativePathToRoot;
    if (filePath.endsWith('.js')) {
      prefix = '.';
    }
    
    // Replace absolute paths with relative paths
    // This handles /_next/ and /images/
    let nextReplacement = (prefix + '/_next/').replace(/\/+/g, '/');
    let imagesReplacement = (prefix + '/images/').replace(/\/+/g, '/');
    
    // Ensure relative paths start with ./ if they are in the same directory
    if (!nextReplacement.startsWith('.') && !nextReplacement.startsWith('/')) {
      nextReplacement = './' + nextReplacement;
    }
    if (!imagesReplacement.startsWith('.') && !imagesReplacement.startsWith('/')) {
      imagesReplacement = './' + imagesReplacement;
    }
    
    // Use a more robust replacement
    let relativeContent = content
      .split('/_next/').join(nextReplacement)
      .split('/images/').join(imagesReplacement);
    
    fs.writeFileSync(filePath, relativeContent);
    console.log(`Fixed paths in ${filePath}`);
  }
});

// Create .nojekyll file to ensure GitHub Pages doesn't ignore _next folder
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('Created .nojekyll');
