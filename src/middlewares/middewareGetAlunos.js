const { Aluno } = require('../models/aluno')

module.exports = function (profissional, req, res, next) {
  getAlunos(profissional.alunos).then(alunos => {
    profissional.alunos = alunos;
    res.send(profissional);
  });
}
const getAlunos = async (list) => {
  return await Promise.all(list.map(async id => await Aluno.findOne({ _id: id })))
}