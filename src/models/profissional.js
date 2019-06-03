const { createSchema, createModel } = require('../db/index')
const profissional = {
  cpf: {
    type: String
  },
  nome: {
    type: String
  },
  alunos: {
    type: Array 
  }
}
const schema = createSchema(profissional);
const Profissional = createModel('Profissional', schema);

module.exports = {
  Profissional
}