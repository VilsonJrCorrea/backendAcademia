const { createSchema, createModel } = require('../db/index')
const { questionarioSchema } = require('./questionario')
const aluno = {
  codigoAluno: {
    type: String,
    required: true,
    min: 4,
    max: 4
  },
  nome: {
    type: String,
    min: 5,
    max: 255
  },
  dataNascimento: {
    type: String,
  },
  sexo: {
    type: String
  },
  ativo: {
    type: Boolean
  },
  fone: {
    type: String
  },
  celular: {
    type: String
  },
  email: {
    type: String
  },
  cidade: {
    type: String
  },
  uf: {
    type: String
  },
  cep: {
    type: String
  },
  rua: {
    type: String
  },
  numero: {
    type: Number
  },
  bairro: {
    type: String
  },
  questionario: questionarioSchema
}
const alunoSchema = createSchema(aluno);
const Aluno = createModel('Aluno', alunoSchema);

module.exports = {
  Aluno,
  alunoSchema
}