const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FuncionarioSchema = new Schema({
    idade: {type: Number, required: true, max: 150},
    nome: {type: String, required: true},
    cargo: {type: String, required: true},
});

// exporta o Schema funcionario
module.exports = mongoose.model('Funcionario', FuncionarioSchema);