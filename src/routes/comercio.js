const express = require('express');
const router = express.Router();
const { Comercio } = require('../models/comercio')

const defaultMessageError = { message: "Comercio não encontrado" };

router.get('/', async (req, res) => {
  res.send(await Comercio.find());
});

router.post('/', async (req, res) => {
  res.send(await Comercio.create(req.body));
})

router.put('/:id', async (req, res) => {
  let comercio = await Comercio.findById(req.params.id);
  if (!comercio) return res.status(404).send(defaultMessageError);
  const newObject = updateObject(req.body, comercio);
  res.send(await Comercio.findByIdAndUpdate(req.params.id, newObject, { new: true }));
})

router.get('/:id', async (req, res) => {
  let comercio = await Comercio.findById(req.params.id);
  if (!comercio) return res.status(404).send(defaultMessageError)
  res.send(comercio);
})

router.delete('/:id', async (req, res) => {
  let comercio = await Comercio.findByIdAndDelete(req.params.id);
  if (!comercio) return res.status(404).send(defaultMessageError);
  res.send(comercio);
})
module.exports = router;

function updateObject(object, oldObject) {
  return {
    nome: object.nome ? object.nome : oldObject.nome,
    produtos: object.produtos ? object.produtos : oldObject.produtos
  }
}