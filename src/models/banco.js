const { createSchema, createModel } = require('../db/index')
const banco = {

}
const schema = createSchema(banco);
const Banco = createModel('Banco', schema);

module.exports = {
  Banco
}