const express = require('express');
const router = express.Router();

const ADMIN = {
  email: "admin@rh.com",
  password: "123456"
};

router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN.email && password === ADMIN.password) {
    res.send({ token: 'fake-jwt-token' }); 
  } else {
    res.status(401).send({ error: 'Credenciais inválidas.' });
  }
});

module.exports = router;
