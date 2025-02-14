const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Ddos = require('ddos');
const routes = require('./api/v1/router');
const {
  whitelist, ddosConfig,
} = require('./config');

const ddosInstance = new Ddos(ddosConfig);

// const corsOptions = {
//   exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time',
//   origin: (origin, callback) => {
//     if (!whitelist || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

const corsOptions = {
  exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time',
  origin: "*"
};

/**
 * Express instance
 * @public
 */

const server = express();

// npm module for preventing ddos attack. See more https://www.npmjs.com/package/ddos
server.use(ddosInstance.express);

// parse body params and       attache them to req.body
server.use(bodyParser.json());

// enable CORS - Cross Origin Resource Sharing
server.use(cors(corsOptions));

// mount api v1 routes
server.use('/healthcheck', (req, res) => res.send('OK'));
server.use('/api/v1', routes);
server.use('/*', (req, res) => res.send('Not Found'));


module.exports = server;
