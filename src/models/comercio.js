const { createSchema, createModel } = require('../db/index')
const produtoSchema = require('./produto')
const comercio = {
  produtos: [produtoSchema],
}
const schema = createSchema(comercio);
const Venda = createModel('Comercio', schema);

module.exports = {
  Venda
}