# Express Boilerplate

ExpressJS boilerplate with Socket.IO, Mongoose for scalable projects.

### Includes

- [ExpressJS](https://expressjs.com)
- [NodeJS](https://nodejs.org/en/)
- [Mongoose](http://mongoosejs.com/docs/guide.html)
- [Socket.io](https://socket.io/docs)
- [Nodemon](https://nodemon.io/)
- [API-Docs](http://apidocjs.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```bash
#!/bin/bash
Node@v10.21.x or higher
```

### Installing

A step by step series that will tell you how to get a development env running

```bash
#!/bin/bash
$ git clone https://github.com/imbudhiraja/express-boilerplate.git
$ cd express-boilerplate
```

```node
#!/.nvm/versions/node/v10.x.x/bin/node
$ npm ci
```

### Useful Scripts

| Script | Description |
| ------ | ------ |
| npm run dev | Starts development server at localhost:8443 and socket server at localhost:3002 |
| npm start | Starts production server at localhost:8443 and socket server at localhost:3002 |
| npm run lint | Run Eslint to find out linting issues. |
| npm run docs | Create API docs. checkout APIs at - localhost:3001/v1/docs |
| npm run docs-postman | Create API docs [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) file to import to [Postman](https://www.getpostman.com) |

### Run at local server

```bash
touch .env

npm run start
http://localhost:8443/
```
#### NOTE - Refer to [Sample Env](https://github.com/imbudhiraja/express-boilerplate/blob/master/sample-env.js) File

### Check Server Status
Once server has started run http://localhost:8443/healthcheck.

## [Issues](https://github.com/imbudhiraja/express-boilerplate.git/issues)
### [LICENSE](https://github.com/imbudhiraja/express-boilerplate/blob/master/LICENSE)


