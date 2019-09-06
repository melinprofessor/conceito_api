const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// crud
let pessoas = 
[
    {
        nome: "Vinicius",
        idade: 24,
        cpf: 44433000124
    },
    {
        nome: "Afonso",
        idade: 12,
        cpf: 44433000125
    },
    {
        nome: "Thiago",
        idade: 21,
        cpf: 44433000126
    },
]


function atualizar(cpf ,data) {
    const pessoasAtualizado = pessoas.map(p => {
        if(p.cpf === cpf) {
            return data;
        }
        return p;
    })

    pessoas = pessoasAtualizado;
   return Promise.resolve();
}

function excluir(cpf) {
    for(let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].cpf == cpf) {
            pessoas.splice(i,1);
        }
    }
    return Promise.resolve();
}

app.use(bodyParser.json());

app.get('/pessoas',(req, res)=>{
    res.send(pessoas);
});

app.post('/pessoas',(req, res)=> {
   pessoas.push(req.body)
    res.send('usuário cadastrado!');
});

app.put('/pessoas',(req, res) => {
    atualizar(req.body.cpf, req.body).then(()=>{
        res.send('usuário atualizado!');
    })
})

app.delete('/pessoas/:cpf', (req, res)=> {

    excluir(req.params.cpf).then(()=>{
        res.send('usuário excluído!');
    })
})

app.listen(8000, ()=>{
    console.log('Servidor on');
});