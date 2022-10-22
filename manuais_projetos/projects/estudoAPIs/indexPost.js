//Cria uma constante para armazenar o express
const express = require('express')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')


//midleware deverá ser feito, que é a ponte entre as requisições
// use é um metodo do express que fala para a gente usar
//pois o insomnia vai chegar aqui no use e vai executar tudo em json
app.use(express.json())



//definimos uma rota e utilizamos o metodo post para enviar informações para nossa API
// tudo que é enviado via post é recebido na requisição req,
// podemos escolher onde iremos pegar esse post, neste caso vamos pegar no body e exibir 
// no console, assim que for enviado a API
//app.route('/').post((req,res) => console.log(req.body ))

//Poderia ser feito o inverso, pegar o corpo da requisição e enviar como resposta
app.route('/').post((req,res) => res.send(req.body))


//precisa abrir o insomnia, pois o navegador não suporte post