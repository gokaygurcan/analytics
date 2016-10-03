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
const ua = require('universal-analytics');

// variables
const app = express();
const port = process.env.PORT || '6598';

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// magic!
app.get('/', (req, res, next) => {
  res.redirect(302, 'https://www.gokaygurcan.com/');
});

app.get('/:tracking_id/*.(svg|png)', (req, res, next) => {
  let params = req.params;
  let query  = req.query;

  // vars
  let id = params.tracking_id;
  let path = params['0'];
  let ext = params['1'];
  let style = query.style || 'flat-square';
  
  // create a visitor
  let visitor = ua(id, req._remoteAddress);

  // hit!
  visitor.pageview(path).send();

  // render the badge
  res.sendFile(`${__dirname}/public/badge-${style}.${ext}`);
});

// set port
app.set('port', port);

// create server
const server = http.createServer(app);

// start listening
server.listen(port);

// handle events
server.on('error', (error) => {
  console.error(chalk.red(`Error occured: ${chalk.underline(error.code)}`));
  throw error;
}).on('listening', (data) => {
  console.info(chalk.green(`Started on port ${chalk.underline(server.address().port)}`));
  console.info(chalk.gray(`ktrl/Ctrl + C to shut down. \n`));
});
