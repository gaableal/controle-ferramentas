const mongoose = require('mongoose');

const ferramentaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  imagem: { type: String } 
});

module.exports = mongoose.model('Ferramenta', ferramentaSchema);

