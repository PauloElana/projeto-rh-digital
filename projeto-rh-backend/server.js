const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); // se estiver usando frontend separado
const app = express();

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado!"))
  .catch(err => console.error("Erro ao conectar no MongoDB:", err));

// Rotas
app.use('/api/respostas', require('./routes/respostas'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
