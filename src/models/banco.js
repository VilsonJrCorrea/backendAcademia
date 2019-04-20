const { createSchema, createModel } = require('../db/index')
const banco = {
  nome: {
    type: String
  },
  agencia: {
    type: String
  },
  conta: {
    type: String
  }
}
const bancoSchema = createSchema(banco);
const Banco = createModel('Banco', bancoSchema);

module.exports = {
  Banco,
  bancoSchema
}