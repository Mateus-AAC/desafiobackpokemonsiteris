const jwt = require('jsonwebtoken');

module.exports = {
    entrarNaApi: (req, res) => {
        try {
            if(req.body.user === 'admin' && req.body.password === '123'){

                const id = 1; 

                var token = jwt.sign({ id }, process.env.SECRET, {

                    expiresIn: 3000 

                });

                return res.status(200).send({ Auth: true, Token: token })

            } else {

                res.status(500).send('Login invalido.');

            }
        } catch (error) {

            res.status(404).json(`Erro: ${error}`);

        }
    },
    excluirtokenApi: (req, res) => {

        res.json({ auth: false, token: null });
        
    }
}