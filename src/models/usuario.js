const { createSchema, createModel } = require('../db/index')
const { bancoSchema } = require('./banco')
const { caixaSchema } = require('./caixa')
const usuario = {
  nome: {
    type: String
  },
  bancos: [bancoSchema],
  caixa: caixaSchema
}
const schema = createSchema(usuario);
const Usuario = createModel('Usuario', schema);

module.exports = {
  Usuario
}