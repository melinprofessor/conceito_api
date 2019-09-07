const mongoose = require('mongoose');
const {Schema} = mongoose;

const pessoaSchema = new Schema({
    nome: { type: String, required:[true, '{PATH} é obrigatório']},
    idade: { type: Number, required:[true, '{PATH} é obrigatório']},
    cpf: { type: String, required:[true, '{PATH} é obrigatório']},
});

module.exports = mongoose.model('Pessoa', pessoaSchema);