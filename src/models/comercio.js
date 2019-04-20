const { createSchema, createModel } = require('../db/index')
const {produtoSchema} = require('./produto')
const comercio = {
  nome: {
    type: String
  },
  produtos: [produtoSchema],
}
const schema = createSchema(comercio);
const Comercio = createModel('Comercio', schema);

module.exports = {
  Comercio
}