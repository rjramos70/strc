const Funcionario = require('../models/funcionario.model');

var count = 0;

/**
 * Atualiza funcionário com base no ID passados na URL
 */
exports.update = function(req, res){
    
    Funcionario.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, funcionario){
    if(err){
            res.status(500).send(err);
        }
        console.log(`Funcionário id: ${req.params.id} atualizada com sucesso!`);
        res.status(200).send({ 'message':`Funcionário id: ${req.params.id} atualizada com sucesso!`});
    });
}

/**
 * Remove funcionário com base no ID passados na URL
 */
exports.delete = function(req, res){

    Funcionario.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.status(500).send(err);
        }
        console.log(`Funcionário id: ${req.params.id} removido com sucesso!`);
        res.status(200).send({ 'message':`Funcionário id: ${req.params.id} removido com sucesso!`});
    });
}

/**
 * Lista todos os funcionários
 */
exports.listAll = function(req, res){
    Funcionario.find({}, function(err, funcionarios){
        if(err){
            res.status(500).send(err);
        }
        console.log(`Listando todos os funcionários cadastrados!`);
        res.status(200).send(funcionarios);
    });
}

/**
 * Obtem funcioário com base no ID passados na URL
 */
exports.getById = function(req, res){
    Funcionario.findById(req.params.id, function(err, funcionatio){
        if(err){
            res.status(500).send(err);
        }
        console.log(`Get Funcionário id: ${req.params.id}!`);
        res.status(200).send(funcionatio);
    });
}

/**
 * Cria novo funcionário
 */
exports.create = function(req, res){

    let funcionario = new Funcionario({
        idade: req.body.idade,
        nome: req.body.nome,
        cargo: req.body.cargo
    });

    funcionario.save(function(err){
        if(err){
            res.status(500).send(err);
        }
        console.log(`Funcionario criado com sucesso!`);
        res.status(200).send({ 'message':`Funcionario criado com sucesso!`});
    })
}