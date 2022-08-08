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
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM pokemons WHERE id = ?', [id], (error, results) => {
                if(error) { 
                    return rejeitado(error); 
                }
                if(results.length > 0){
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
}