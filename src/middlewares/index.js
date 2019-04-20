const express = require('express');
const app = express();
const cors = require('cors');
const aluno = require('../routes/aluno')
const comercio = require('../routes/comercio')
const equipamento = require('../routes/equipamento')
const profissional = require('../routes/profissional')
const usuario = require('../routes/usuario')
const venda = require('../routes/venda')

function initMiddlewares() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/alunos', aluno);
  app.use('/api/comercios', comercio);
  app.use('/api/equipamentos', equipamento);
  app.use('/api/profissionais', profissional);
  app.use('/api/usuarios', usuario);
  app.use('/api/vendas', venda);
}
module.exports = {
  initMiddlewares,
  app
}