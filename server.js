const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('안녕하세요! CI/CD 자동 배포 성공입니다! 🚀\n');
});
server.listen(80, () => {
  console.log('Server running on port 80');
});