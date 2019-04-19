const express = require('express');
const app = express();
const cors = require('cors');

function initMiddlewares() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

}
module.exports = {
  initMiddlewares,
  app
}