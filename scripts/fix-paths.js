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
    // Replace absolute paths with relative paths
    // This handles /_next/ in both HTML tags and script content
    let relativeContent = content.replace(/(?<=["'])\/_next\//g, './_next/');
    fs.writeFileSync(filePath, relativeContent);
    console.log(`Fixed paths in ${filePath}`);
  }
});
