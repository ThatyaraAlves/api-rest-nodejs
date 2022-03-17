// RESPOSABILIDADE DO ARQUIVO ATENDIMENTOS: CONTROLAR QUAIS AS ROTAS QUE TEMOS E O 
//QUE FAZER QUANDO ACESSARMOS CADA UMA DESSAS ROTAS

module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))
    

    app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um POST'))

}


