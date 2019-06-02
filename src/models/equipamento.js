const { createSchema, createModel } = require('../db/index')
const equipamento = {
  nome: {
    type: String
  },
  quantidade: {
    type: String
  },
  preco: {
    type: String
  }
}
const schema = createSchema(equipamento);
const Equipamento = createModel('Equipamento', schema);

module.exports = {
  Equipamento
}