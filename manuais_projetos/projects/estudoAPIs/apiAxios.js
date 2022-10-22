//Consumir API do Github com Axios
//Cria uma constante para armazenar o express
const express = require('express')

//O Express não consegue criar chegar na API, por isso deverá ser instalado o axios
const axios = require('axios')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')

//chamar onde será realizada a rota, deverá ser informado qual o metodo
//dentro do metodo deverá sempre passado 2 parametros o de requisição e de resposta
//irá retorar o res.send 
app.route('/').get((req,res)=>{
//metodo para chegar até a API
    axios.get('https://api.github.com/users/andersoncpinheiro')
    //O Axios vai na api e pegar as informações e guardar no result, por sua vez ele será enviado para o insomnia
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})
