// chama o mongoose para ser utilizado
const mongoose = require('mongoose');
// defini qual vai ser o endereço do servidor onde esta a nossa aplicação
mongoose.connect('mongodb://localhost/pessoas', { useNewUrlParser: true });
// Define que o mongo vai utilizar a promessa global como padrão
mongoose.Promise = global.Promise;
// permite que o mongo crie index que são registros unicos
mongoose.set('userCreateIndex', true);

// realiza a conexão com mongo
const db = mongoose.connection;

// em caso de erro ao conectar o mongo vai
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// exporta o objeto do banco para ser utilizado em outras partes
module.exports = db;