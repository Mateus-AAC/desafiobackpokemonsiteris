module.exports = {

    resolverRota: (req, res, next) => {

        res.status(404).json({message: 'Não existe esse caminho.'});

    }
    
}