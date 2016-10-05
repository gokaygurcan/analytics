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

app.enable('trust proxy');
app.set('x-powered-by', false);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index.html');
});


// magic!
//app.get('/', (req, res) => {
  //res.redirect(302, 'https://www.gokaygurcan.com/'); // #3

  //res.sendFile(path.join(__dirname, 'index.html'));
//});

app.get('/:tracking_id/*.(svg|png|gif)', (req, res) => {
  let params = req.params;
  let query = req.query;

  // vars
  let id = params.tracking_id;
  let brand = id.startsWith('UA') ? 'google' : 'yandex';
  let path = params['0'];
  let ext = params['1'];
  let style = query.style ? query.style : 'flat-square';
  let file = ext === 'gif' ? 'pixel' : 'badge-' + brand + '-' + style;

  if (brand === 'google') {
    // create a visitor
    let visitor = ua(id);

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
  res.sendFile(`${__dirname}/public/${file}.${ext}`);
});

// set port
app.set('port', port);

// create server
const server = http.createServer(app);

// start listening
server.listen(port);

// handle events
server.on('error', error => {
  console.error(chalk.red(`Error occured: ${chalk.underline(error.code)}`));
  throw error;
}).on('listening', () => {
  console.info(chalk.green(`Started on port ${chalk.underline(server.address().port)}`));
  console.info(chalk.gray(`ktrl/Ctrl + C to shut down. \n`));
});
