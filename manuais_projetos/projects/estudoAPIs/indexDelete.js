//Cria uma constante para armazenar o express
const express = require('express')

//Neste constante de aplicação deverá ser inicializado o servidor express
const app = express()

//chamar onde a aplicação estará sendo 'escutada' através da porta 3000, tudo será mostrado através dela
app.listen('3000')

 
//Através do route estaremos armazenando um id para deletar através do insomnia
//
app.route('/:identificador').delete((req,res) => {
res.send(req.params.identificador)
})
