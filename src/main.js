require('dotenv').config();

const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const bodyParser = require('body-parser');

const routesPokemons = require('../src/routes/pokemonsRoutes');

const acessoRouter = require('../src/routes/acessoRoutes');

const app = express();

app.use(helmet());

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', acessoRouter);

app.use('/api', routesPokemons);

module.exports = app;