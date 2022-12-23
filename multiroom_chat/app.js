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
    
    socket.on('msgParaServidor', function(data){

        /*Dialogos*/
        socket.emit(
            'msgParaCliente',
            {apelido:data.apelido, mensagem:data.mensagem}
            );
        socket.broadcast.emit(
           'msgParaCliente',
           {apelido:data.apelido, mensagem:data.mensagem}
        );
        /*Participantes*/
    if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
        socket.emit(
            'participantesParaCliente',
            {apelido:data.apelido}
            );
        socket.broadcast.emit(
            'participantesParaCliente',
            {apelido:data.apelido}
            );
        }
    });
});