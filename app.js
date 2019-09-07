const express = require('express');
const bodyParser = require('body-parser');
require('./database/mongo');
const app = express();

const Controller = require('./controller');

app.use(bodyParser.json());

app.get('/pessoas', Controller.get);

app.post('/pessoas', Controller.post)

app.put('/pessoas', Controller.put);

app.delete('/pessoas/:cpf', Controller.delete);

app.listen(8000, ()=>{
    console.log('Servidor on');
});