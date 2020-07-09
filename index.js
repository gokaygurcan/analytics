// https://analytics.gokaygurcan.com/

'use strict';

// core modules
const { createServer } = require('http');
const { join } = require('path');

// node_modules
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const ua = require('universal-analytics');

// variables
const app = express();
const port = process.env.PORT || '6598';

app.enable('trust proxy');
app.set('x-powered-by', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

// magic!
app.get('/', (_, res) => {
  res.redirect(302, 'https://www.gokaygurcan.com/'); // #3
});

app.get('/:tracking_id/*.(svg|png|gif)', (req, res) => {
  const params = req.params;
  const query = req.query;

  // vars
  const id = params.tracking_id;
  const brand = id.startsWith('UA') ? 'google' : 'yandex';
  const path = params['0'];
  const ext = params['1'];
  const style = query.style ? query.style : 'flat-square';
  const file = ext === 'gif' ? 'pixel' : 'badge-' + brand + '-' + style;

  if (brand === 'google') {
    // create a visitor
    const visitor = ua(id);

    // hit!
    visitor.pageview(
      {
        v: 1,
        tid: id,
        t: 'pageview',
        uip: req.ip, // IPv6
        ua: req.headers['user-agent'],
        dp: path
      }
    ).send();
  }
  else {
    // #5
    // yandex will be done in near future, i hope.
  }

  // render the badge
  res.sendFile(join(__dirname, 'public', `${file}.${ext}`));
});

app.get('/favicon.ico', (_, res) => {
  res.status(204).end();
});

// set port
app.set('port', port);

// create server
const server = createServer(app);

// start listening
server.listen(port);

// handle events
server.on('error', error => {
  console.error(`Error occured: ${error.code}`);
  throw error;
}).on('listening', () => {
  console.info(`Started on port ${server.address().port}`);
  console.info('ktrl/Ctrl + C to shut down. \n');
});
