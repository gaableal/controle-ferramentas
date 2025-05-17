const express = require('express');
const router = express.Router();
const Ferramenta = require('../models/Ferramenta');

// Cadastrar ferramenta
router.post('/', async (req, res) => {
  try {
    const nova = new Ferramenta(req.body);
    const salva = await nova.save();
    res.status(201).json(salva);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar ferramenta' });
  }
});

// Listar ferramentas
router.get('/', async (req, res) => {
  try {
    const ferramentas = await Ferramenta.find();
    res.json(ferramentas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar ferramentas' });
  }
});

// Atualizar quantidade
router.put('/:id', async (req, res) => {
  try {
    const atualizada = await Ferramenta.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(atualizada);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar ferramenta' });
  }
});

// Excluir ferramenta
router.delete('/:id', async (req, res) => {
  try {
    await Ferramenta.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir ferramenta' });
  }
});

module.exports = router;
