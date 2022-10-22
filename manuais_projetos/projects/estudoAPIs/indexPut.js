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
let author ="Anderson César"

//Mostrar através do route como estava antes de alterar via insomia o valor de author
app.route('/').get((req,res) => res.send(author))


//vamos passar na rota home /, dentro do body a informação que atribuimos na 
//variavel author, para editar via PUT
app.route('/').put((req,res) =>{ 
    author = req.body.author
    res.send(author)
})

