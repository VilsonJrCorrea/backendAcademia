const { createSchema, createModel } = require('../db/index')
const { questionarioSchema } = require('./questionario')
const { atividadeSchema } = require('./atividade')
const { mensalidadeSchema } = require('./mensalidade')
const aluno = {
  codigoAluno: {
    type: String,
    required: true,
    // unique: true
  },
  nome: {
    type: String,
    min: 5,
    max: 255
  },
  dataNascimento: { type: String, },
  sexo: { type: String },
  fone: { type: String },
  celular: { type: String },
  email: { type: String },
  cidade: { type: String },
  uf: { type: String },
  cep: { type: String },
  rua: { type: String },
  numero: { type: Number },
  bairro: { type: String },
  questionario: questionarioSchema,
  atividades: [atividadeSchema],
  profissionalId: { type: String },
  ativo: { type: Boolean },
  mensalidades: [mensalidadeSchema]
}
const alunoSchema = createSchema(aluno);
const Aluno = createModel('Aluno', alunoSchema);

module.exports = {
  Aluno,
  alunoSchema
}