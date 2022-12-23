//exportar propriedade chamada index, contem função que terá parametros

const { emit } = require("../../config/server");

//1- instancia objeto express, 2 requisicao e 3 resposta
module.exports.iniciachat = function(application, req, res){
    var dadosForm = req.body;
    
    req.assert('apelido','nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','nome ou apelido deve conter entre 3 e 15  caracteres').len(3, 15);
    var erros = req.validationErrors();
    
    if(erros){
        res.render('index',{validacao: erros});
        return;
    }
    
    application.get('io').emit(
    'msgParaCliente', 
    {apelido: dadosForm.apelido, mensagem: ' entrou no chat'
    }
    );

    res.render('chat',{dadosForm : dadosForm})
}