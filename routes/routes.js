const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

// Criar usuário
router.post('/usuarios', controller.cadastrarUsuario);

// Listar usuários
router.get('/usuarios', controller.listarUsuarios);

// Buscar usuário por ID
router.get('/usuarios/:id', controller.buscarUsuarioPorId);

module.exports = router;