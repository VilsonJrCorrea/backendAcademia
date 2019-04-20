const express = require('express');
const router = express.Router();
const { Venda } = require('../models/venda');
const defaultMessageError = { message: "Venda não encontrada" };
router.get('/', async (req, res) => {
  res.send(await Venda.find());
});

router.post('/', async (req, res) => {
  res.send(await Venda.create(req.body));
})

router.put('/:id', async (req, res) => {
  let venda = await Venda.findById(req.params.id);
  if (!venda) return res.status(404).send(defaultMessageError);
  let newObject = updateObject(req.body, venda);
  newObject = await Venda.findByIdAndUpdate(req.params.id, newObject, { new: true });
  res.send(newObject);
})

router.get('/:id', async (req, res) => {
  const venda = await Venda.findById(req.params.id);
  if (!venda) return res.status(404).send(defaultMessageError);
  res.send(venda);
})

router.delete('/:id', async (req, res) => {
  const venda = await Venda.findByIdAndDelete(req.params.id);
  if (!venda) return res.status(404).send(defaultMessageError);
  res.send(venda);
})
module.exports = router;
function updateObject(object, oldObject) {
  return {
    cliente: object.cliente ? object.cliente : oldObject.cliente,
    data: object.data ? object.data : oldObject.data,
    idComercio: object.idComercio ? object.idComercio : oldObject.idComercio,
    produtos: object.produtos ? object.produtos : oldObject.produtos,
    total: object.total ? object.total : oldObject.total
  }
}