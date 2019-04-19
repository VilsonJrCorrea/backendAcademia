const { createSchema, createModel } = require('../db/index')
const produto = {

}
const produtoSchema = createSchema(produto);
const Produto = createModel('Produto', produtoSchema);

module.exports = {
  Produto,
  produtoSchema
}