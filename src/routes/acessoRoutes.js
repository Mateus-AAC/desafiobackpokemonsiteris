const express = require('express');

const router = express.Router();

const acessoController = require('../controller/acessoController');

router.post('/pegarAcesso', acessoController.entrarNaApi);

router.post('/logout', acessoController.excluirtokenApi);

module.exports = router;