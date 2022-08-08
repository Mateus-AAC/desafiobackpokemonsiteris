const express = require('express');

const router = express.Router();

const pokemonsController = require('../controller/pokemonsController');

router.get('/', pokemonsController.buscarTodos);

router.get('/pokemon/:id', pokemonsController.buscarUm);

router.post('/cadastrarpokemon', pokemonsController.inserir);

router.put('/pokemonatualizar/:id', pokemonsController.atualizar);

router.delete('/pokemondeletar/:id', pokemonsController.excluir);

module.exports = router;