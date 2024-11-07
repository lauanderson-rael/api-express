
/* -----------  INICIANDO SERVIDOR EXPRESS  ------------- */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
const app = express();
const port = 3000;

// Habilitando CORS para todas as origens
app.use(cors()); 

// Middleware para interpretar JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/meubanco', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Rota simples
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});




/* -----------  ROTAS ------------- */

const User = require('./models/User');

// criar um novo usuário
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
});

// listar todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});
