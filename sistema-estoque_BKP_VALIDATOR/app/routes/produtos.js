module.exports = function(application){

    application.get('/produtos', function(req,res){

        var connection = application.config.dbConnection();
        var produtosModel = new application.app.models.ProdutosDAO(connection);

        produtosModel.getProdutos(function(error, result){
            res.render('produtos/produtos', { produtos : result });
        });

    });
}