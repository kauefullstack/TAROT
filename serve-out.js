const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = parseInt(process.env.PORT || process.argv[2] || '5000', 10);
const root = path.join(__dirname, 'out');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

function safeJoin(base, target) {
  const targetPath = '.' + path.normalize('/' + target);
  return path.join(base, targetPath);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
  stream.on('error', (err) => {
    res.writeHead(500);
    res.end('Internal Server Error');
  });
}

const indexFile = path.join(root, 'index.html');

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(req.url || '/');
    let pathname = decodeURIComponent(parsed.pathname || '/');
    if (pathname.includes('..')) {
      res.writeHead(400);
      return res.end('Bad Request');
    }

    let filePath = safeJoin(root, pathname);
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        return sendFile(res, filePath);
      }

      // If directory, try index.html inside it
      if (!err && stats.isDirectory()) {
        const idx = path.join(filePath, 'index.html');
        if (fs.existsSync(idx)) return sendFile(res, idx);
      }

      // Fallback to SPA index.html
      if (fs.existsSync(indexFile)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(indexFile).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not Found');
      }
    });
  } catch (e) {
    res.writeHead(500);
    res.end('Server Error');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
  console.log(`Open http://localhost:${port} in your browser`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message || err);
  process.exit(1);
});
