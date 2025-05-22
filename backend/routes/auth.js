const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();
const JWT_SECRET = 'seusegredoseguro'; 

// Registrar usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Usuário já cadastrado' });
    }

    const hashed = await bcrypt.hash(senha, 10);
    const user = new Usuario({ nome, email, senha: hashed });

    await user.save();
    res.status(201).send({ message: 'Usuário criado com sucesso!' });
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

  res.send({
    mensagem: 'Login realizado com sucesso!',
    token,
    usuario: {
      id: user._id,
      nome: user.nome,
      email: user.email
    }
  });
});

module.exports = router;
