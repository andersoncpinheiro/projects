//exportar propriedade chamada index, contem função que terá parametros
//1- instancia objeto express, 2 requisicao e 3 resposta
module.exports.home = function(application, req, res){
    res.render('index', {validacao:{}})
}