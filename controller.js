// utilizo o modelo para mepear as funcionalidades do mongoose em cima do schema criado
const Pessoa = require('./Pessoas');

exports.get = (req, res, next) => {
    // find procura determinada informação e retorna os dados com base no filtro
   Pessoa.find({}, (erro, pessoas)=>{
       if(erro) {
           // send é a função utilizada para enviar a resposta para o cliente novamente
           res.send('erro');
       }

       res.send(pessoas);
   })
}

exports.post = (req, res, next) => {
    const pessoa = req.body;
    // o Create é responsavel por salvar as informações no mongodb
    Pessoa.create(pessoa,(err, pes) => {
        if(err) {
            res.send(err)
        }

        res.send(pes);
    })
}

exports.put = (req, res, next) => {
    const pessoas = req.body
    // O findOneAndUpdate é responsavel por encontrar o dado com base em um filtro e atualuzar o mesmo
    Pessoa.findOneAndUpdate({cpf: pessoas.cpf}, pessoas, {new: true}, (err, pes)=> {
        if(err) {
            res.send('Erro ao atualizar');
        }

        res.send(pes);
    })
}
exports.delete = (req, res, next) => {
    const cpf = req.params.cpf

    // O findOneAndDelete é responsavel por encontrar o dado com base em um filtro e remover o mesmo do banco

    Pessoa.findOneAndDelete({cpf: cpf}, (err, pes)=> {
        if(err) {
            res.send(err);
        }

        res.send(pes);
    })
}