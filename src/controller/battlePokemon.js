const battleService = require('../services/battleService');

module.exports = {
    buscarTodos: async (req, res) => {
        try {

            const json = { error: '', result: [] };

            const resultados = await battleService.exibirTodosResultados();

            for (let i in resultados) {
                json.result.push({
                    "id": resultados[i].id,
                    "winner": resultados[i].winner,
                    "loser": resultados[i].loser,
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

            const resultados = await battleService.buscarUm(id);

            if (resultados) {
                json.result = {
                    "winner": resultados.winner,
                    "loser": resultados.loser,
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
    battle: async (req, res) => {
        try {
            
            let json = { error: '', result: [] };

            let playerA = req.body.player1;

            let playerB = req.body.player2;

            if (playerA && playerB) {

                const pokemons = await battleService.selecionar(playerA, playerB);

                const battlepk = await battleService.luta(pokemons);

                if (battlepk == "empate") {

                    json.result = battlepk;

                    res.status(202).json(json);

                } else {

                    json.result = battlepk;

                    res.status(201).json(json);

                }

            } else {

                json.error = 'Batalha adiada.';

                res.status(200).json(json);
            }

        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    }
}