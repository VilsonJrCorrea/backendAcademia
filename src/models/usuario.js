const { createSchema, createModel } = require('../db/index')
const { vendaSchema } = require('./venda');
const { comercioSchema } = require('./comercio')
const { bancoSchema } = require('./banco')
const { caixaSchema } = require('./caixa')
const usuario = {
  vendas: [vendaSchema],
  comercios: [comercioSchema],
  bancos: [bancoSchema],
  caixa: caixaSchema
}
const schema = createSchema(usuario);
const Usuario = createModel('Usuario', schema);

module.exports = {
  Usuario
}