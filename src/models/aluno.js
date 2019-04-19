const { createSchema, createModel } = require('../db/index')
const aluno = {

}
const schema = createSchema(aluno);
const Aluno = createModel('Aluno', schema);

module.exports = {
    Aluno
}