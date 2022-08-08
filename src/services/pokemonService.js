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
    inserir: async (name, hp, attack, defense, special_attack, special_defense, speed) => {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO pokemons (name, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [name, hp, attack, defense, special_attack, special_defense, speed],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId); 
                }
            );
        });
    }
}