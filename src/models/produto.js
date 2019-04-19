const { createSchema, createModel } = require('../db/index')
const produto = {

}
const schema = createSchema(produto);
const Produto = createModel('Produto', schema);

module.exports = {
    Produto
}