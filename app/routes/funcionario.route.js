const express = require('express');
const router = express.Router();

const funcionario_controller = require('../controllers/funcionario.controller');

router
	.get('/funcionario', funcionario_controller.listAll)
	.get('/funcionario/:id', funcionario_controller.getById)
	.put('/funcionario/:id/update', funcionario_controller.update)
	.delete('/funcionario/:id', funcionario_controller.delete)
	.post('/funcionario', funcionario_controller.create)
	.post('/funcionario/pesquisar', funcionario_controller.pesquisar);


module.exports = router;