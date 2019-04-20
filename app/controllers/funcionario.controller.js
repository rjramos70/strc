const Funcionario = require('../models/funcionario.model');

exports.update = function(req, res){
    Funcionario.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, funcionario){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send('Funcionário atualizado com sucesso!');
    });
}

exports.delete = function(req, res){
    Funcionario.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send('Funcionário removido com sucesso!');
    });
}

exports.listAll = function(req, res){
    Funcionario.find({}, function(err, funcionarios){
        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(funcionarios);
    });
}

exports.getById = function(req, res){
    Funcionario.findById(req.params.id, function(err, funcionatio){
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(funcionatio);
    });
}

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
        res.status(200).send('Funcionario criado com sucesso!!');
    })
}