const express = require('express');

const server = express();

// URL da API: localhost:3000/curso

// Exemplo de requisição com GET usando query params: ?nome=Tamara
server.get('/curso', (req, res) => {
    const consulta = req.query.nome;
    res.send(`Nome: ${consulta}`)
})

// Exemplo de requisição com GET usando route params: /curso/2
server.get('/curso/:id', (req, res) => {
    const consulta = req.params.id;
    res.send(`ID do curso: ${consulta}`)
})

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});