//Cria uma constante para armazenar o express
const express = require('express')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')

//Sempre que tiver trabalhando com corpo de requisição, com o body
//recebendo coisas pelo body deve ser usado o midleware, ele que vai transformar
//tudo que ta chegando em json
app.use(express.json())

//chamar onde será realizada a rota, deverá ser informado qual o metodo
//dentro do metodo deverá sempre passado 2 parametros o de requisição e de resposta
//irá retorar o res.send 
/*para retornar apenas a cidade
app.route('/').post((req,res)=>{
    res.send(req.body.cidade)
})
*/

//Retorna mais de um elemento dentro do body
app.route('/').post((req,res)=>{
    const {nome, cidade, livros_favoritos} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade} e meus livros favoritos são: ${livros_favoritos}`)})