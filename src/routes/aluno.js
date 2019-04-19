const express = require('express');
const router = express.Router();
const { Aluno } = require('../models/aluno')

const messageDefault = { message: "Aluno não encontrado" };

router.get('/', async (req, res) => {
  res.send(await Aluno.find());
});

router.post('/', async (req, res) => {
  const codigoAluno = Math.floor(Math.random() * 1000000);
  const aluno = {
    codigoAluno,
    ...req.body
  }
  res.send(await Aluno.create(aluno));
})

router.put('/:id', async (req, res) => {
  let aluno = await Aluno.findById(req.params.id);
  if (!aluno) return res.status(404).send(messageDefault);
  const newObject = updateObject(aluno, req.body);
  aluno = await Aluno.findByIdAndUpdate(req.params.id, newObject, { new: true });
  res.send(aluno);
})

router.get('/:id', async (req, res) => {
  let aluno = await Aluno.findById(req.params.id);
  if (!aluno) return res.status(404).send(messageDefault);
  res.send(aluno);
})

router.delete('/:id', async (req, res) => {
  let aluno = await Aluno.findByIdAndDelete(req.params.id);
  if (!aluno) return res.status(404).send(messageDefault);
  res.send(aluno);
})

function updateObject(oldObject, object) {
  return newObject = {
    nome: object.nome ? object.nome : oldObject.nome,
    dataNascimento: object.dataNascimento ? object.dataNascimento : oldObject.dataNascimento,
    sexo: object.sexo ? object.sexo : oldObject.sexo,
    fone: object.fone ? object.fone : oldObject.fone,
    celular: object.celular ? object.celular : oldObject.celular,
    email: object.email ? object.email : oldObject.email,
    cidade: object.cidade ? object.cidade : oldObject.cidade,
    uf: object.uf ? object.uf : oldObject.uf,
    cep: object.cep ? object.cep : oldObject.cep,
    rua: object.rua ? object.rua : oldObject.rua,
    numero: object.numero ? object.numero : oldObject.numero,
    bairro: object.numero ? object.numero : oldObject.numero,
    questionario: object.questionario ? object.questionario : oldObject.questionario,
    atividades: object.atividades ? object.atividades : oldObject.atividades,
    mensalidades: object.mensalidades ? object.mensalidades : oldObject.mensalidades
  }
}
module.exports = router; 