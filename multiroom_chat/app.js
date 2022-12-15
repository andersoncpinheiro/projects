/*Importar configurações do servidor */
var app = require('./config/server.js');

/*Parametrizar porta de escuta */
app.listen(80, function(){
    console.log("Servidor Online")
});

