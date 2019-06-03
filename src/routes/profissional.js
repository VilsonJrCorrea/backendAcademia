const express = require('express');
const router = express.Router();
const { Profissional } = require('../models/profissional')
const messageDefaultError = { message: "Profissional não encontrado" };
const middlewareGetAlunos = require('../middlewares/middewareGetAlunos');

router.get('/', async (req, res) => {
  res.send(await Profissional.find());
});

router.post('/', async (req, res) => {
  res.send(await Profissional.create(req.body));
})

router.put('/:id', async (req, res) => {
  let profissional = await Profissional.findById(req.params.id);
  if (!profissional) return res.status(404).send(messageDefaultError);
  let newObject = updateObject(req.body, profissional);
  res.send(await Profissional.findByIdAndUpdate(req.params.id, newObject, { new: true }));
})

router.get('/:id', async (req, res, next) => {
  const profissional = await Profissional.findById(req.params.id);
  if (!profissional) return res.status(404).send(messageDefaultError);
  next(profissional);
}, [middlewareGetAlunos])

router.delete('/:id', async (req, res) => {
  const profissional = await Profissional.findByIdAndDelete(req.params.id);
  if (!profissional) return res.status(404).send(messageDefaultError);
  res.send(profissional);
})

function updateObject(object, oldObject) {
  return {
    nome: object.nome ? object.nome : oldObject.nome,
    cpf: object.cpf ? object.cpf : oldObject.cpf,
    alunos: object.alunos ? object.alunos : oldObject.alunos
  }
}

module.exports = router;