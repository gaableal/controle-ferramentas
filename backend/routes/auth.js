const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();
const JWT_SECRET = 'seusegredoseguro'; // você pode usar variável de ambiente

// Registrar
router.post('/register', async (req, res) => {
  const { email, senha } = req.body;

  const hashed = await bcrypt.hash(senha, 10);
  const user = new Usuario({ email, senha: hashed });

  try {
    await user.save();
    res.status(201).send({ message: 'Usuário criado!' });
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar usuário' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const user = await Usuario.findOne({ email });
  if (!user) return res.status(401).send({ error: 'Usuário não encontrado' });

  const valid = await bcrypt.compare(senha, user.senha);
  if (!valid) return res.status(401).send({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
});

module.exports = router;
