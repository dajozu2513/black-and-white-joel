const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(root, urlPath);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(file).toLowerCase();
    const mime = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.JPG':'image/jpeg', '.png':'image/png' };
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(8081, () => console.log('Server running on port 8081'));
