/*Importar o framework express */
var express = require('express');

/*Importar o modulo do consign */
var consign = require('consign');

/*Importar o modulo do body-parser */
var bodyParser = require('body-parser');

/*Importar o modulo do express validator */
var expressValidator = require('express-validator');

/*Iniciar o objeto do express*/
var app = express();

/*setar as variaveis view engine variavel views*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar os middlewares express static*/
app.use(express.static('./app/public'));

/*Configurar os middlewares body-parser, caso precise recuperar
recuperar post de algum requisição através de json, conseguimos através do body*/
app.use(bodyParser.urlencoded({extended:true}))

/*Configurar os middlewares express-validor*/
app.use(expressValidator());

/*excutar as rotas, dos controllers e autoloaders para dentro do app*/
consign()
    .include('app/routes')
    .include('app/models')
    .include('app/controllers')
    .into(app);

/*Exportar o objeto app*/
module.exports = app;