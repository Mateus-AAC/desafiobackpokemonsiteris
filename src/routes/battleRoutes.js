const express = require('express');

const router = express.Router();

const verificarConexao = require('../middlewares/verificarConexao');

const battleController = require('../controller/battlePokemon');

router.post('/battle', verificarConexao.verifyJWT, battleController.battle);

module.exports = router;