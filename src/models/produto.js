const { createSchema, createModel } = require('../db/index')
const produto = {
  _id: { type: String },
  descricao: { type: String },
  preco: { type: Number }
}
const produtoSchema = createSchema(produto);
const Produto = createModel('Produto', produtoSchema);

module.exports = {
  Produto,
  produtoSchema
}