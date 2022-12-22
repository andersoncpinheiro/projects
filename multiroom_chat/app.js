/*Importar configurações do servidor */
var app = require('./config/server.js');

/*Parametrizar porta de escuta */
var server = app.listen(80, function(){
    console.log("Servidor Online")
});

var io = require('socket.io').listen(server);
app.set('io', io);
/*conexão por websocket*/
io.on('connection', function(socket){
    console.log('usuário conectou');

    socket.on('disconnect', function(socket){
        console.log('usuário desconectou');
    });
});
