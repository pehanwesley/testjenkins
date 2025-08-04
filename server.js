const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello depuis le port 89 !');
});

// Écouter sur toutes les adresses IP (0.0.0.0) et sur le port 89
server.listen(89, '0.0.0.0', () => {
  console.log('Serveur en ligne sur http://0.0.0.0:89');
});
