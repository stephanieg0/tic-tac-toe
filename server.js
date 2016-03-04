'use strict';

const express = require('express');
const app = express();

//setting up websockets
const server = require('http').createServer(app);
const ws = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});

ws.on('connection', socket => { // eslint-disable-line no-unused-vars
  console.log('back end socket connected');

  //listening for data event in main.js
  socket.on('data', data => {
    console.log('data', data);
  });
});

