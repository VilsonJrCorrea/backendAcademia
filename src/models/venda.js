const { createSchema, createModel } = require('../db/index')
const { produtoSchema } = require('./produto')
const venda = {
  cliente: {
    eAluno: {
      type: Boolean
    },
    idAluno: {
      type: String
    }
  },
  data: {
    type: String
  },
  idComercio: {
    tipe: String
  },
  produtos: [produtoSchema],
  total: {
    type: Number
  }
}
const schema = createSchema(venda);
const Venda = createModel('Venda', schema);

module.exports = {
  Venda
}