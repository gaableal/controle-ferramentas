const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Crie esse model também

// Rota para cadastrar usuário
router.post('/', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send(usuario);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao cadastrar usuário' });
  }
});

module.exports = router;
