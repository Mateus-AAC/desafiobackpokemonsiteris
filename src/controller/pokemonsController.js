const PokemonService = require('../services/PokemonService');

module.exports = {
    buscarTodos: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            let pokemons = await PokemonService.buscarTodos();

            for (let i in pokemons) {
                json.result.push({
                    "name": pokemons[i].name,
                    "atributes": {
                        "hp": pokemons[i].hp,
                        "attack": pokemons[i].attack,
                        "defense": pokemons[i].defense,
                        "special-attack": pokemons[i].special_attack,
                        "special_defense": pokemons[i].special_defense,
                        "speed": pokemons[i].speed
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
            let json = { error: '', result: [] };

            let id = req.params.id;

            let pokemons = await PokemonService.buscarUm(id);

            if (pokemons) {
                json.result = {
                    "id": pokemons.id,
                    "name": pokemons.name,
                    "atributes": {
                        "hp": pokemons.hp,
                        "attack": pokemons.attack,
                        "defense": pokemons.defense,
                        "special-attack": pokemons.special_attack,
                        "special_defense": pokemons.special_defense,
                        "speed": pokemons.speed
                    }
                }

            }

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`erro: ${error}`);

        }
    },
    inserir: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            let name = req.body.name;
            let hp = req.body.hp;
            let attack = req.body.attack;
            let defense = req.body.defense;
            let special_attack = req.body.special_attack;
            let special_defense = req.body.special_defense;
            let speed = req.body.speed;

            if (name && hp && attack && defense && special_attack && special_defense && speed) {
                let pokemonsId = await PokemonService.inserir(name, hp, attack, defense, special_attack, special_defense, speed);

                json.result = {
                    id: pokemonsId,
                    name,
                    atributes: {
                        hp,
                        attack,
                        defense,
                        special_attack,
                        special_defense,
                        speed
                    }
                };

            } else {
                json.error = 'Não enviado';
            }

            res.status(201).json(json);

        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    },
    atualizar: async (req, res) => {
        try {

            let json = { error: '', result: [] };

            let id = req.params.id;
            let name = req.body.name;
            let hp = req.body.hp;
            let attack = req.body.attack;
            let defense = req.body.defense;
            let special_attack = req.body.special_attack;
            let special_defense = req.body.special_defense;
            let speed = req.body.speed;

            if (id && name && hp && attack && defense && special_attack && special_defense && speed) {
                let pokemonsId = await PokemonService.atualizar(name, hp, attack, defense, special_attack, special_defense, speed, id);

                json.result = {
                    pokemonsId,
                    id,
                    name,
                    atributes: {
                        attack,
                        defense,
                        special_attack,
                        special_defense,
                        speed
                    }
                };

            } else {
                json.error = 'Não enviado';
            }

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`erro: ${error}`);

        }
    },
    excluir: async (req, res) => {
        try {
            let json = { error: '', result: ['Pokemon excluido com sucesso '] };

            await PokemonService.excluir(req.params.id);

            res.status(200).json(json);

        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    }
}
