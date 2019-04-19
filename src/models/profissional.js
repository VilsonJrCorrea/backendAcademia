const { createSchema, createModel } = require('../db/index')
const profissional = {

}
const schema = createSchema(profissional);
const Profissional = createModel('Profissional', schema);

module.exports = {
    Profissional
}