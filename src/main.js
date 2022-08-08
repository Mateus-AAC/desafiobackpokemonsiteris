require('dotenv').config();

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const routes = require('../src/routes/pokemonsRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pokemons', routes);

module.exports = app;