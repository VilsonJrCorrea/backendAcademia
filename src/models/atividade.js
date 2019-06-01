const { createSchema, createModel } = require('../db/index')
const atividade = {
  _id: {
    type: String
  },
  descricao: {
    type: String
  },
  diaSemana: {
    type: String
  },
  repeticoes: {
    type: Number
  },
  serie: {
    type: Number
  },

}
const atividadeSchema = createSchema(atividade);
const Atividade = createModel('Atividade', atividadeSchema);

module.exports = {
  Atividade,
  atividadeSchema
}