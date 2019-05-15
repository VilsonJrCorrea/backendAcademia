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
      type: String
    },
    bronquite: {
      type: String
    },
    coluna: {
      type: String
    },
    obesidade: {
      type: String
    },
    treinar: {
      type: String
    },
    manterForma: {
      type: String
    },
    gestante: {
      type: String
    },
    conselhoMedico: {
      type: String
    },
    outros: {
      type: String
    },
  },
  comoConheceuAcademia: {
    jornal: {
      type: String
    },
    placa: {
      type: String
    },
    cartaz: {
      type: String
    },
    planfleto: {
      type: String
    },
    amigos: {
      type: String
    },
    outdoor: {
      type: String
    },
    internet: {
      type: String
    },
    passandoEmFrente: {
      type: String
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