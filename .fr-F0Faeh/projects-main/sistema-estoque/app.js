var app = require('./config/server')

//var routeAdmin = require('./app/routes/admin')(app);
//var routeAnotacoes = require('./app/routes/cadastrar')(app);
//var routeCadastrar = require('./app/routes/produtos')(app);
//var routeHome = require('./app/routes/home')(app);

app.listen(3000, function(){
    console.log("Servidor Online!");
});