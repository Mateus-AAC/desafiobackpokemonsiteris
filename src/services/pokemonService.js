const db = require('../database/config');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            const sql = 'SELECT * FROM pokemons';

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

            const sql = 'SELECT * FROM pokemons WHERE id = ?';

            const values = [id];

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

            const sql = 'INSERT INTO pokemons (name, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?)';

            const values = [name, hp, attack, defense, special_attack, special_defense, speed];

            db.query(sql, values, (error, results)=>{
                    if(error){ 
                        return rejeitado(error);
                    } else {
                        aceito(results.insertId); 
                    }
                }
            );
        });
    },
    atualizar: async (name, hp, attack, defense, special_attack, special_defense, speed, id) => {
        return new Promise((aceito, rejeitado)=> {
            const sql = 'UPDATE pokemons SET name = ?, hp = ?, attack = ?, defense = ?, special_attack = ?, special_defense = ?, speed = ? WHERE id = ?';

            const values = [name, hp, attack, defense, special_attack, special_defense, speed, id];

            db.query(sql, values, (error, results) => {
                    if(error){ 
                        return rejeitado(error); 
                    } else {
                        aceito(results);
                    }
                }
            );
        });
    },
    excluir: async (id) => {
        return new Promise((aceito, rejeitado) => {
            const sql = 'DELETE FROM pokemons WHERE id = ?';

            const values = [id];

            db.query(sql, values, (error, results) => {
                if (error) {
                    return rejeitado(error);
                } else {
                    aceito(results);
                }
            })
        })
    }
}