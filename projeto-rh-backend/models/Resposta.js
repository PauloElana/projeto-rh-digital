const mongoose = require('mongoose');

const respostaSchema = new mongoose.Schema({
  name: String,
  email: String,
  area: String,
  experience: String,
  jobSearch: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resposta', respostaSchema);
