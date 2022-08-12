const db = require('../database/config');

module.exports = {
    exibirTodosResultados: async () =>{
        return new Promise((aceito, rejeitado)=>{

            const sql = 'SELECT * FROM results';

            db.query(sql, (error, results)=>{
                if(error) { 
                    return rejeitado(error);  
                } else {
                    aceito(results);
                }
            });
        });
    },
    buscarUm: async (id) => {
        return new Promise((aceito, rejeitado)=>{

            const sql = 'SELECT * FROM results WHERE id = ?';

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
    selecionar: (playerA, playerB) => {
        return new Promise((aceito, rejeitado) => {

            const sql = 'select * from pokemons where id in (?, ?)';

            const values = [playerA, playerB];

            db.query(sql, values, (error, results) => {
                if (error) {
                    return rejeitado(error);
                } else {
                    aceito(results);
                }
            }
            );

        });
    },
    luta: (dados) => {
        return new Promise((aceito, rejeitado) => {

            const jogadorA = dados[0];

            const jogadorB = dados[1];

            const detalhes = [];

            for (let item in jogadorA, jogadorB) {

                if (item !== 'name' && item !== 'id') {

                    if (jogadorA[item] > jogadorB[item]) {

                        detalhes.push(jogadorA.id)

                    } else if (jogadorB[item] > jogadorA[item]) {

                        detalhes.push(jogadorB.id)

                    } else {

                        detalhes.push(0)

                    }

                }

            }

            const countA = detalhes.filter(item => item === jogadorA.id).length;

            const countB = detalhes.filter(item => item === jogadorB.id).length;

            if (countA > countB) {

                var vencedorA = {
                    winner: jogadorA.id,
                    loser: jogadorB.id,
                    details: {
                        hp: detalhes[0],
                        attack: detalhes[1],
                        defense: detalhes[2],
                        special_attack: detalhes[3],
                        special_defense: detalhes[4],
                        speed: detalhes[5]
                    }
                };

                const sql = 'INSERT INTO results (winner, loser, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

                const values = [jogadorA.id, jogadorB.id, detalhes[0], detalhes[1], detalhes[2], detalhes[3], detalhes[4], detalhes[5]];

                db.query(sql, values, (error, results) => {
                        if (error) {
                            return rejeitado(error);
                        } else {
                            return aceito(vencedorA, results.insertId, status);
                        }
                    }
                );

            } else if (countB > countA) {

                var vencedorB = {
                    winner: jogadorB.id,
                    loser: jogadorA.id,
                    details: {
                        hp: detalhes[0],
                        attack: detalhes[1],
                        defense: detalhes[2],
                        special_attack: detalhes[3],
                        special_defense: detalhes[4],
                        speed: detalhes[5]
                    }
                };

                const sql = 'INSERT INTO results (winner, loser, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

                const values = [jogadorB.id, jogadorA.id, detalhes[0], detalhes[1], detalhes[2], detalhes[3], detalhes[4], detalhes[5]];

                db.query(sql, values, (error, results) => {
                        if (error) {
                            return rejeitado(error);
                        } else {
                            return aceito(vencedorB , results);
                        }
                    }
                );

            } else {

                return aceito('empate');

            }

        });
    }
}