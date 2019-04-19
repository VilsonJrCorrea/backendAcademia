const { createSchema, createModel } = require('../db/index')
const atividade = {

}
const schema = createSchema(atividade);
const Atividade = createModel('Atividade', schema);

module.exports = {
    Atividade
}