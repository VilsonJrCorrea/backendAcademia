const { createSchema, createModel } = require('../db/index')
const venda = {

}
const schema = createSchema(venda);
const Venda = createModel('Venda', schema);

module.exports = {
    Venda
}