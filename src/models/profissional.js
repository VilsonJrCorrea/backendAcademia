const { createSchema, createModel } = require('../db/index')
const profissional = {
  nome: {
    type: String
  },
  idAlunos: {
    type: Array
  }
}
const schema = createSchema(profissional);
const Profissional = createModel('Profissional', schema);

module.exports = {
  Profissional
}