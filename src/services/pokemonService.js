const db = require('../database/config')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            let sql = 'SELECT * FROM pokemons';

            db.query(sql, (error, results)=>{
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

            let sql = 'SELECT * FROM pokemons WHERE id = ?';

            let values = [id];

            db.query(sql, values, (error, results) => {
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

            let sql = 'INSERT INTO pokemons (name, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?)';

            let values = [name, hp, attack, defense, special_attack, special_defense, speed];

            db.query(sql, values, (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId); 
                }
            );
        });
    }
}