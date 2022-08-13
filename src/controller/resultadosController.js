const { contentSecurityPolicy } = require('helmet');
const resultadosServices = require('../services/resultadosServices');

module.exports = {
    buscarTodos: async (req, res) => {
        try {

            const json = { error: '', result: [] };

            const resultados = await resultadosServices.exibirTodosResultados();

            for (let i in resultados) {
                json.result.push({
                    "id": resultados[i].id,
                    "winner": {
                        "id": resultados[i].id_winner,
                        "name": resultados[i].winner_name
                    },
                    "loser": {
                        "id": resultados[i].id_loser,
                        "name": resultados[i].loser_name
                    },
                    "details": {
                        "hp": resultados[i].hp,
                        "attack": resultados[i].attack,
                        "defense": resultados[i].defense,
                        "special_attack": resultados[i].special_attack,
                        "special_defense": resultados[i].special_defense,
                        "speed": resultados[i].speed
                    }
                })
            }

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`erro:${error}`);

        }
    },
    buscarUm: async (req, res) => {
        try {

            const json = { error: '', result: [] };

            const id = req.params.id;

            const resultados = await resultadosServices.buscarUm(id);

            if (resultados) {
                json.result = {
                    "winner": {
                        "id": resultados.id_winner,
                        "name": resultados.winner_name
                    },
                    "loser": {
                        "id": resultados.id_loser,
                        "name": resultados.loser_name
                    },
                    "details": {
                        "hp": resultados.hp,
                        "attack": resultados.attack,
                        "defense": resultados.defense,
                        "special_attack": resultados.special_attack,
                        "special_defense": resultados.special_defense,
                        "speed": resultados.speed
                    }
                }
            }

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`erro:${error}`);

        }
    },
    raking: async (req, res) => {
        try {

            const json = { error: '', result: [] };

            const counts = {};

            const resultados = await resultadosServices.raking();

            resultados.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

            json.result = counts;

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`erro:${error}`);

        }
    }
}