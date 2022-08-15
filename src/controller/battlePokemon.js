const battleService = require('../services/battleService');

module.exports = {
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