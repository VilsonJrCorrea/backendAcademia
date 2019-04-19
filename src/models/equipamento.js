const { createSchema, createModel } = require('../db/index')
const equipamento = {

}
const schema = createSchema(equipamento);
const Equipamento = createModel('Equipamento', schema);

module.exports = {
    Equipamento
}