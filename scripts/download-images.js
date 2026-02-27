const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://utpalghoshofficial.com/images/section/hero-img.jpg', dest: 'public/images/hero-img.jpg' },
  { url: 'https://utpalghoshofficial.com/images/background/hero-bg.jpg', dest: 'public/images/hero-bg.jpg' },
  { url: 'https://utpalghoshofficial.com/images/section/about.jpg', dest: 'public/images/about.jpg' },
  { url: 'https://utpalghoshofficial.com/images/blog/blog1.jpg', dest: 'public/images/blog1.jpg' },
  { url: 'https://utpalghoshofficial.com/images/blog/blog2.jpg', dest: 'public/images/blog2.jpg' },
  { url: 'https://utpalghoshofficial.com/images/blog/blog3.jpg', dest: 'public/images/blog3.jpg' }
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (err) {
      console.error(`Error downloading ${img.url}: ${err.message}`);
    }
  }
}

main();
