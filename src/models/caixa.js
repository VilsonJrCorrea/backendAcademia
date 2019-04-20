const { createSchema, createModel } = require('../db/index')
const caixa = {
  saldo: {
    type: Number
  }
}
const caixaSchema = createSchema(caixa);
const Caixa = createModel('Caixa', caixaSchema);

module.exports = {
  Caixa,
  caixaSchema
}