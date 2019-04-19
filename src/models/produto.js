const { createSchema, createModel } = require('../db/index')
const produto = {
  descricao: { type: String },
  preco: { type: Number }
}
const produtoSchema = createSchema(produto);
const Produto = createModel('Produto', produtoSchema);

module.exports = {
  Produto,
  produtoSchema
}