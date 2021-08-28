/**
 * Importação dos módulos que serão usados no projeto
 */
// Importa o framework Express para o ser usado, nesse caso, como servidor do projeto.
const express = require('express');
// Importa o Consign, que agrupa dentro do App todas as rotas criadas em outros lugares do projeto 
const consign = require('consign'); 

module.exports = () => {
    const app = express();

    consign()
        .include('controllers')
        .into(app);

    return app
}



