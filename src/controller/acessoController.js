const jwt = require('jsonwebtoken');

module.exports = {
    gerarToken: (req, res) => {
        try {
            if(req.body.user == 'admin' && req.body.password == '123'){

                const id = 1; 

                const token = jwt.sign({ id }, process.env.SECRET);

                return res.status(200).send({ Auth: true, Token: token })

            } else {

                res.status(500).send('Login invalido.');

            }
        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    },
    excluirToken: (req, res) => {
        try {
            
            res.status(200).json({ auth: false, token: null });

        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    }
}