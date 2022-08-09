const express = require('express');

const router = express.Router();

const verificarConexao = require('../middlewares/verificarConexao');

const pokemonsController = require('../controller/pokemonsController');

router.get('/', verificarConexao.verifyJWT, pokemonsController.buscarTodos);

router.get('/pokemon/:id', verificarConexao.verifyJWT, pokemonsController.buscarUm);

router.post('/cadastrarPokemon', verificarConexao.verifyJWT, pokemonsController.inserir);

router.put('/pokemonAtualizar/:id', verificarConexao.verifyJWT, pokemonsController.atualizar);

router.delete('/pokemonDeletar/:id', verificarConexao.verifyJWT, pokemonsController.excluir);

module.exports = router;