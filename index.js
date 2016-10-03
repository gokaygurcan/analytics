// https://analytics.gokaygurcan.com/

'use strict';

// core modules
const http = require('http');

// node_modules
const express = require('express');

// variables
const app = express();
const port = process.env.PORT || '6598';

// magic!
app.all('/', (req, res, next) => {
  res.json(
    {
      timestamp: new Date()
    }
  );
});

// set port
app.set('port', port);

// create server
const server = http.createServer(app);

// start listening
server.listen(port);

// handle events
server.on('error', (err) => {
  console.log(err.code);
}).on('listening', (data) => {
  console.log('Listening');
});
