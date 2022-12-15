module.exports.produtos = function(application, req, res){
    var connection = application.config.dbConnection();
    var produtosModel = new application.app.models.ProdutosDAO(connection);
    produtosModel.getProdutos(function(error, result){
        res.render('produtos/produtos', { produtos : result });
    });
}

module.exports.produto = function(application, req, res){
    var connection = application.config.dbConnection();
    var produtosModel = new application.app.models.ProdutosDAO(connection);
    produtosModel.getProduto(function(error, result){
        res.render('produtos/produto', { produto : result });
    });

     
}