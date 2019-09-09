// Chama o mongoose para ser utilizado no código
const mongoose = require('mongoose');

// herda o a funções do mongoose para utilizar o schema
const {Schema} = mongoose;

// Cria-se um Schema para que uma representção de como os documentos serão salvos no mongodb
// Onde eu defino quais fields(campos) o schema vai ter e caracteristicas que o campos vai ter
const pessoaSchema = new Schema({
    nome: { type: String, required:[true, '{PATH} é obrigatório']},
    idade: { type: Number, required:[true, '{PATH} é obrigatório']},
    cpf: { type: String, required:[true, '{PATH} é obrigatório']},
});


// crio um modelo do Schema com o nome de Pessoas para utilizar as funcionalidades que o mongoose oferece
// De facil acesso ao mongo
module.exports = mongoose.model('Pessoa', pessoaSchema);