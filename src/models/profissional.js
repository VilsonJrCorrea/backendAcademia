const { createSchema, createModel } = require('../db/index')
const alunoSchema = require('./aluno')
const profissional = {
  nome: {
    type: String
  },
  alunos: [alunoSchema]
}
const schema = createSchema(profissional);
const Profissional = createModel('Profissional', schema);

module.exports = {
  Profissional
}