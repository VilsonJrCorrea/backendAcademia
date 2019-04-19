const { createSchema, createModel } = require('../db/index')
const alunoSchema = require('./aluno')
const produtoSchema = require('./produto')
const venda = {
  cliente: {
    eAluno: {
      type: Boolean
    },
    descricao: {
      aluno: alunoSchema
    }
  },
  data: {
    type: String
  },
  tipoVenda: {
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