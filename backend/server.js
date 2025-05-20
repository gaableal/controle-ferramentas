const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({ origin: ['http://localhost:4200', 'https://frotend-m4m3.vercel.app'] }));
app.use(express.json({ limit: '10mb' 
}));

// Rotas
const ferramentaRoutes = require('./routes/ferramenta.routes');
app.use('/ferramentas', ferramentaRoutes);

// Conexão com o MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('🟢 Conectado ao MongoDB');
    app.listen(3000, () => {
      console.log('🚀 Servidor rodando na porta 3000');
    });
  })
  .catch(err => console.error('🔴 Erro ao conectar no MongoDB:', err));
