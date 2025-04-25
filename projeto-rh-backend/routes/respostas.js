const express = require('express');
const Resposta = require('../models/Resposta');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const resposta = new Resposta(req.body);
    await resposta.save();
    res.status(201).send(resposta);
  } catch (err) {
    res.status(400).send({ error: 'Erro ao salvar resposta.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const respostas = await Resposta.find().sort({ createdAt: -1 });
    res.send(respostas);
  } catch (err) {
    res.status(500).send({ error: 'Erro ao buscar respostas.' });
  }
});

module.exports = router;
