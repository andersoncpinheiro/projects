//Cria uma constante para armazenar o express
const express = require('express')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')

//chamar onde será realizada a rota, deverá ser informado qual o metodo
//dentro do metodo deverá sempre passado 2 parametros o de requisição e de resposta
//irá retorar o res.send 
app.route('/').get((req,res)=>res.send("Home"))
app.route('/about').get((req,res)=>res.send("About Page"))