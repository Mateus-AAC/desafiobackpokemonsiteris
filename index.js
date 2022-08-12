const app = require('./src/main');

const port = normalizaPort(process.env.PORT || 3000);

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

app.listen(port, function () {
    console.log(`rodando na porta: ${port}`)
})