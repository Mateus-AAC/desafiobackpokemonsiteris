const jwt = require('jsonwebtoken');

module.exports = {
    entrarNaApi: (req, res) => {
        try {
            if(req.body.user === 'admin' && req.body.pwd === '123'){
                const id = 1; 

                var token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 3000 
                });

                return res.status(200).send({ Auth: true, Token: token })
            } else {
                res.status(500).send('Login inválido!');
            }
        } catch (error) {
            res.status(404).json(`erro: ${error}`);
        }
    },
    excluirtokenApi: (req, res) => {
        res.json({ auth: false, token: null });
    }
}