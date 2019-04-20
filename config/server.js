const express = require('express');
const consign = require('consign');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// carrega as routes
const funcionario_routes = require('../app/routes/funcionario.route');

const app = express();


// Seta o banco de dados na mLab
let dev_db_url = 'mongodb://user:user999@ds157522.mlab.com:57522/stone-db';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// atribuindo as rotas
app.use('/', funcionario_routes);


var port = 6789;

/* parametrizar a porta de escuta */
app.listen(port, function(){
    console.log(`API Rest Stone rodando na porta:   ${port}`);
})


module.exports = app;