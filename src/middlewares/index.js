const express = require('express');
const app = express();
const cors = require('cors');
const aluno = require('../routes/aluno')

function initMiddlewares() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/alunos', aluno);
}
module.exports = {
  initMiddlewares,
  app
}