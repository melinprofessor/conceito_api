const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pessoas', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('userCreateIndex', true);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))

module.exports = db;