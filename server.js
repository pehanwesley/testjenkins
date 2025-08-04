// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('✅ Serveur WebSocket en écoute sur ws://localhost:8080');

wss.on('connection', (socket) => {
  console.log('📡 Client connecté');

  socket.on('message', (message) => {
    console.log('📨 Message reçu du client :', message.toString());
    
    // Répondre au client
    socket.send('👋 Salut client, j\'ai bien reçu ton message !');
  });

  socket.on('close', () => {
    console.log('❌ Client déconnecté');
  });

  socket.send('🎉 Bienvenue sur le serveur WebSocket !');
});
