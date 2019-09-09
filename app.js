//chama o pacote express para ser usado
const express = require('express');

// Tranformar as informações que vem no corpo da para json
const bodyParser = require('body-parser');

// chama o arquivo para realizar conexão com o banco
require('./database/mongo');

// criar uma estancia do express para utilzar as funcionalidades do express
const app = express();

// Chama o arquivo criando onde tem a função a ser executada quando chamar a rota
const Controller = require('./controller');

//Toda vez que utiliza o .use é chamado de middleware toda requisição vai passar aqui
// e dopois vai para rota correta
app.use(bodyParser.json());

// Estou criando uma rota /pessoas que a requisição é do tipo get e chamada uma função do controller para ser executada.
// GET -> Busca informação
app.get('/pessoas', Controller.get);

// Estou criando uma rota /pessoas que a requisição é do tipo post e chamada uma função do controller para ser executada.
// POST -> inseri informação
app.post('/pessoas', Controller.post)

// Estou criando uma rota /pessoas que a requisição é do tipo put e chamada uma função do controller para ser executada.
// PUT -> atualiza informação
app.put('/pessoas', Controller.put);

// Estou criando uma rota /pessoas que a requisição é do tipo delete e chamada uma função do controller para ser executada.
// DELETE -> exclui determinada informação
app.delete('/pessoas/:cpf', Controller.delete);

//criar um servidor que escuta as requisições na porta que for especificada.
app.listen(8000, ()=>{
    console.log('Servidor on');
});