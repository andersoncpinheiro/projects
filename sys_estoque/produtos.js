var http = require('http');

var server = http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end("<html><body>Produtos de Tecnologia</body></html>");
    }else if(categoria == '/eletros'){
        res.end("<html><body>Produtos de Eletros</body></html>");
    }else if(categoria == '/eletronicos'){
        res.end("<html><body>Produtos Eletronicos</body></html>");
    }else{
        res.end("<html><body>Sistema de Estoque</body></html>");
    }
});

server.listen(3000);