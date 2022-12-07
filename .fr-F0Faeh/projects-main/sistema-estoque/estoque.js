//Instalado inicialmente $npm init $npm express -save $npm install ejs --save
var http = require ('http');
//criar servidor que vai importar biblioteca http, que vai receber como parametro
//requisição e resposta
var server = http.createServer(function(req,res){

    var categoria = req.url;

    if (categoria == '/produtos'){
     res.end("<html><body>Produtos de Tecnologia</body></html>");
    
    } else if(categoria =='/cadastrar'){
    res.end("<html><body>Produtos de Vestuarío</body></html>");
    
    } else{
        res.end("<html><body>Sistema de Estoque</body></html>");
    }

}).listen(3000);