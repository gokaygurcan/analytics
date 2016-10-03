// https://analytics.gokaygurcan.com/

'use strict';

// core modules
const http = require('http');
const path = require('path');

// node_modules
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');

// variables
const app = express();
const port = process.env.PORT || '6598';

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
server.on('error', (error) => {
  console.error(chalk.red('Error occured: %s'), chalk.underline(error.code));
  throw error;
}).on('listening', (data) => {
  console.info(chalk.green('Started on port %s'), chalk.underline(server.address().port));
  console.info(chalk.gray('ktrl/Ctrl + C to shut down. \n'));
});
