require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const db = require('./database');

class App {
  constructor() {
    this.express = express();
    App.database();
    this.middlewares();
    this.routes();
  }

  static database() {
    (async () => {
      try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.log(error);
      }
    })();
  }

  middlewares() {
    this.express.use(morgan('dev'));
    this.express.use(express.json({ limit: 20 * 1024 * 1024 }));
    this.express.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
