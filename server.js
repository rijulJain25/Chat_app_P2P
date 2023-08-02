const express = require('express');
const socketio = require('socket.io');
const swarm = require('hyperswarm');
const crypto = require('crypto');

const app = express();
const server = app.listen(3000);
const io = socketio(server);

const topic = crypto.randomBytes(32);
const peer = new swarm();

peer.join(topic, { client: true, server: true });

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    peer.broadcast(topic, message);
  });
});