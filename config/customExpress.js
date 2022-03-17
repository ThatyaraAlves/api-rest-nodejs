// RESPOSABILIDADE DO ARQUIVO customExpress: CONFIGURAR QUALQUER COISA DENTRO DO Express

const express = require('express')

const consign = require('consign') // o consign tem a função de agrupar todos os módulos 
//para que possamos usar em outros arquivos


/*MODULOS são códigos que nao estao no mesmo arquivo*/




 module.exports = () => {
    const app = express() //criando uma aplicação pelo express

    consign().include('controllers').into(app)
 // aqui estamos incluindo todos os modulos presentes na pasta controlers no nosso app

    return app
 }