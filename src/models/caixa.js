const { createSchema, createModel } = require('../db/index')
const caixa = {

}
const schema = createSchema(caixa);
const Caixa = createModel('Caixa', schema);

module.exports = {
    Caixa
}