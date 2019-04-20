const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/usuario')
const defaultMessageError = { message: "Usuario não encontrado" };
router.get('/', async (req, res) => {
  res.send(await Usuario.find());
});

router.post('/', async (req, res) => {
  res.send(await Usuario.create(req.body));
})

router.put('/:id', async (req, res) => {
  let usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).send(defaultMessageError);
  const newObject = updateObject(req.body, usuario);
  usuario = await Usuario.findByIdAndUpdate(req.params.id, newObject, { new: true });
  res.send(usuario);
})

router.get('/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).send(defaultMessageError);
  res.send(usuario);
})

router.delete('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndDelete(req.params.id);
  if (!usuario) return res.status(404).send(defaultMessageError);
  res.send(usuario);
})
module.exports = router;
function updateObject(object, oldObject) {
  return {
    nome: object.nome ? object.nome : oldObject.nome,
    bancos: object.bancos ? object.bancos : oldObject.bancos,
    caixa: object.caixa ? object.caixa : oldObject.caixa
  }
}