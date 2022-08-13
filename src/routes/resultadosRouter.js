const express = require('express');

const router = express.Router();

const verificarConexao = require('../middlewares/verificarConexao');

const resultadosController = require('../controller/resultadosController')

router.get('/resultados', verificarConexao.verifyJWT, resultadosController.buscarTodos);

router.get('/resultado/:id', verificarConexao.verifyJWT, resultadosController.buscarUm);

router.get('/raking', verificarConexao.verifyJWT, resultadosController.raking);

module.exports = router;