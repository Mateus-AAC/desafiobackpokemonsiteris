const PokemonService = require('../services/PokemonService');

module.exports = {
    buscarTodos: async (req, res) => {
        try {
            let json = {
                error: '',
                result: []
            };

            let pokemons = await PokemonService.buscarTodos();

            for (let i in pokemons) {
                json.result.push({
                    "id": pokemons[i].id,
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
    }
}