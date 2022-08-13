const db = require('../database/config');

module.exports = {
    exibirTodosResultados: async () => {
        return new Promise((aceito, rejeitado) => {

            const sql = 'SELECT * FROM results';

            db.query(sql, (error, results) => {
                if (error) {

                    return rejeitado(error);

                } else {

                    return aceito(results);

                }
            });
        });
    },
    buscarUm: async (id) => {
        return new Promise((aceito, rejeitado) => {

            const sql = 'SELECT * FROM results WHERE id = ?';

            const values = [id];

            db.query(sql, values, (error, results) => {
                if (error) {

                    return rejeitado(error);

                }
                if (results.length > 0) {

                    return aceito(results[0]);

                } else {

                   return  aceito(false);

                }
            });

        });
    },
    raking: async () => {
        return new Promise((aceito, rejeitado) => {

            const sql = 'SELECT * FROM results';

            db.query(sql, (error, results) => {
                if (error) {

                    return rejeitado(error);

                } else {
                    const dados = [];

                    for (let i in results) {

                        dados.push(results[i].winner_name);

                    }

                    return aceito(dados);

                }
            });
        });
    }
}