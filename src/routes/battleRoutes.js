const express = require('express');

const router = express.Router();

const verificarConexao = require('../middlewares/verificarConexao');

const battleController = require('../controller/battlePokemon');

router.get('/resultados', verificarConexao.verifyJWT, battleController.buscarTodos);

router.get('/resultados/:id', verificarConexao.verifyJWT, battleController.buscarUm);

router.post('/battle', verificarConexao.verifyJWT, battleController.battle);

module.exports = router;