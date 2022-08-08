const db = require('../database/config')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM pokemons', (error, results)=>{
                if(error) { 
                    return rejeitado(error);  
                } else {
                    aceito(results);
                }
            });
        });
    },
}