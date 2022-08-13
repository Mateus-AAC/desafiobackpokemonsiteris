const db = require('../database/config');

module.exports = {
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
                    winner: {
                        id: jogadorA.id,
                        nome: jogadorA.name
                    },
                    loser: {
                        id: jogadorB.id,
                        nome: jogador.name
                    },
                    details: {
                        hp: detalhes[0],
                        attack: detalhes[1],
                        defense: detalhes[2],
                        special_attack: detalhes[3],
                        special_defense: detalhes[4],
                        speed: detalhes[5]
                    }
                };

                const sql = 'INSERT INTO results (id_winner, id_loser, winner_name, loser_name, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

                const values = [jogadorA.id, jogadorB.id, jogadorA.name, jogadorB.name, jogabodrdetalhes[0], detalhes[1], detalhes[2], detalhes[3], detalhes[4], detalhes[5]];

                db.query(sql, values, (error, results) => {
                    if (error) {

                        return rejeitado(error);

                    } else {

                        return aceito(vencedorA, results.insertId);

                    }
                });

            } else if (countB > countA) {

                var vencedorB = {
                    winner: {
                       id_pokemon: jogadorB.id,
                       nome: jogadorB.name
                    },
                    loser: {
                        id_pokemon: jogadorA.id,
                        nome: jogadorA.name
                    }, 
                    details: {
                        hp: detalhes[0],
                        attack: detalhes[1],
                        defense: detalhes[2],
                        special_attack: detalhes[3],
                        special_defense: detalhes[4],
                        speed: detalhes[5]
                    }
                };

                const sql = 'INSERT INTO results (id_winner, id_loser, winner_name, loser_name, hp, attack, defense, special_attack, special_defense, speed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

                const values = [jogadorB.id, jogadorA.id, jogadorB.name, jogadorA.name, detalhes[0], detalhes[1], detalhes[2], detalhes[3], detalhes[4], detalhes[5]];

                db.query(sql, values, (error, results) => {

                    if (error) {

                        return rejeitado(error);

                    } else {

                        return aceito(vencedorB, results);

                    }
                });

            } else if (countB == countA) {

                return aceito('empate');

            } else {

                return aceito('dados invalidos não posso comparar.');

            }

        });
    }
}