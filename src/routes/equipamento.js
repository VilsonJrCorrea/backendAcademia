const express = require('express');
const router = express.Router();
const { Equipamento } = require('../models/equipamento')
const defaultMessageError = { message: "Equipamento não encontrado" };
router.get('/', async (req, res) => {
  res.send(await Equipamento.find());
});

router.post('/', async (req, res) => {
  res.send(await Equipamento.create(req.body));
})

router.put('/:id', async (req, res) => {
  let equipamento = await Equipamento.findById(req.params.id);
  if (!equipamento) return res.status(404).send(defaultMessageError);
  newObject = updateObject(equipamento, req.body);
  res.send(await Equipamento.findByIdAndUpdate(req.params.id, newObject, { new: true }))
})

router.get('/:id', async (req, res) => {
  let equipamento = await Equipamento.findById(req.params.id);
  if (!equipamento) return res.status(404).send(defaultMessageError)
  res.send(equipamento);
})

router.delete('/:id', async (req, res) => {
  let equipamento = await Equipamento.findByIdAndRemove(req.params.id);
  if (!equipamento) return res.status(404).send(defaultMessageError);
  res.send(equipamento);
})
module.exports = router;

function updateObject(object, oldObject) {
  return {
    nome: object.nome ? object.nome : oldObject.nome
  }
}