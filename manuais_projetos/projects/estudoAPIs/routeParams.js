//Cria uma constante para armazenar o express
const express = require('express')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')

//Passar o parametro por dentro da rota, para conferir acesse localhost / o nome da variavel 
//incluida diretamente na barra do navegador
app.route('/').get((req,res)=> res.send("oi"))
app.route('/:variavel').get((req,res)=> res.send(req.params.variavel))
app.route('/identidade/:nome').get((req,res)=> res.send(req.params.nome))
