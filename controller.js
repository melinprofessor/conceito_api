const Pessoa = require('./Pessoas');

exports.get = (req, res, next) => {
   Pessoa.find({}, (erro, pessoas)=>{
       if(erro) {
           res.send('erro');
       }

       res.send(pessoas);
   })
}

exports.post = (req, res, next) => {
    const pessoa = req.body;
    Pessoa.create(pessoa,(err, pes) => {
        if(err) {
            res.send(err)
        }

        res.send(pes);
    })
}

exports.put = (req, res, next) => {
    const pessoas = req.body
    Pessoa.findOneAndUpdate({cpf: pessoas.cpf}, pessoas, {new: true}, (err, pes)=> {
        if(err) {
            res.send('Erro ao atualizar');
        }

        res.send(pes);
    })
}
exports.delete = (req, res, next) => {
    const cpf = req.params.cpf
    Pessoa.findOneAndDelete({cpf: cpf}, (err, pes)=> {
        if(err) {
            res.send(err);
        }

        res.send(pes);
    })
}