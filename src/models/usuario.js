const { createSchema, createModel } = require('../db/index')
const usuario = {

}
const schema = createSchema(usuario);
const Usuario = createModel('Usuario', schema);

module.exports = {
    Usuario
}