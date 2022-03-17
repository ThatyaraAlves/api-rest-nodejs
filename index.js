// RESPOSABILIDADE DO ARQUIVO INDEX: SUBIR O SERVIDOR NO AR

const customExpress = require('./config/customExpress')

const app = customExpress()

       //porta 
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    //rota   //funçaõ para executar na rota  



// o parametro req representa a requisição e o res representa a resposta do servidor a essa requisição
