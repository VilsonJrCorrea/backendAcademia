const { createSchema, createModel } = require('../db/index')
const mensalidade = {
  _id: {
    type: String
  },
  vencimento: {
    type: String
  },
  descricao: {
    type: String
  },
  valor: {
    type: Number
  }

}
const mensalidadeSchema = createSchema(mensalidade);
const Mensalidade = createModel('Mensalidade', mensalidadeSchema);

module.exports = {
  Mensalidade,
  mensalidadeSchema
}