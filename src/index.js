const {
  port, env
} = require('./config');

const server = require('./server');
const database = require('./database');
// const scheduler = require('./scheduler');

database.connect();

server.listen(port, () => {
  // scheduler(server);
  console.info(`Server started on port ${port} (${env})`);
});


const src = server;

module.exports = src;
