
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando uma requisição GET!'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send('Rota de envio via POST');
    });
}