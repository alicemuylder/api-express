const express = require('express');
const produtos = require('./produtos')

const server = express();

//importacao necessaria para o metodo post
server.use(express.json());

// localhost:3000/curso/2
//exemplo de get usando route params

server.get('/produtos/:index', (req,res) => { //index pq se refere aos indices do produto
    const index= req.params.index; //com base em parametros de rota, a constante index passa a ter o valor
    res.json({ 
        produto: produtos[index] //array produtos que retorna o indice especifico
    })
})

server.get('/produtos/', (req,res) => { //index pq se refere aos indices do produto
    res.json({ 
        produto: produtos //array produtos que retorna o indice especifico
    })
})

//requisicao POST- inserir novo produto
server.post('/produtos',(req, res) => {
    const novoProduto = req.body; // req.body => as novas informacoes vao para o corpo da requisao, dentro do pacote http, nao esta visivel
    produtos.push(novoProduto);

    res.json(produtos);
})

//metodo PUT(atualizar algum valor de um produto)
server.put('/produtos/:index', (req, res) =>{
    const index = req.params.index;
    const update = req.body;
    produtos[index] = update;

    res.json(produtos);
} )

//metodo DELETE
server.delete('/produtos/:index', (req,res) => {
    const index = req.params.index;
    produtos.splice(index,1);

    res.json(produtos);
})

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});