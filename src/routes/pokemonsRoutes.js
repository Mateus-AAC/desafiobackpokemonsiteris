const express = require('express');

const router = express.Router();

const pokemonsController = require('../controller/pokemonsController');

router.get('/', pokemonsController.buscarTodos);

module.exports = router;