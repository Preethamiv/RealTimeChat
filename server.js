// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Broadcast received message to all connected clients
wss.on('connection', (socket) => {
  console.log('✅ A user connected');

  socket.on('message', (msg) => {
    console.log('📩 Received:', msg.toString());

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  socket.on('close', () => {
    console.log('❌ A user disconnected');
  });
});

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
