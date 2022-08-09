const express = require('express');

const router = express.Router();

const acessoController = require('../controller/acessoController');

router.post('/login', acessoController.gerarToken);

router.post('/logout', acessoController.excluirToken);

module.exports = router;