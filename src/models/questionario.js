const { createSchema, createModel } = require('../db/index')
const alunoSchema = require('./aluno')
const questionario = {
  planoSaude: {
    possui: {
      type: String
    },
    descricao: {
      type: String
    }
  },
  outroEsporte: {
    pratica: {
      type: String
    },
    descricao: {
      type: String
    }
  },
  motivos: {
    aprenderNadar: {
      type: Boolean
    },
    bronquite: {
      type: Boolean
    },
    coluna: {
      type: Boolean
    },
    obesidade: {
      type: Boolean
    },
    treinar: {
      type: Boolean
    },
    manterForma: {
      type: Boolean
    },
    gestante: {
      type: Boolean
    },
    conselhoMedico: {
      type: Boolean
    },
    outros: {
      type: String
    },
  },
  comoConheceuAcademia: {
    jornal: {
      type: Boolean
    },
    placa: {
      type: Boolean
    },
    cartaz: {
      type: Boolean
    },
    planfleto: {
      type: Boolean
    },
    amigos: {
      type: Boolean
    },
    outdoor: {
      type: Boolean
    },
    internet: {
      type: Boolean
    },
    passandoEmFrente: {
      type: Boolean
    },
    outros: {
      type: String
    },
    indicacaoId: String
  }
}
const questionarioSchema = createSchema(questionario);
const Questionario = createModel('Questionario', questionarioSchema);

module.exports = {
  Questionario,
  questionarioSchema
}