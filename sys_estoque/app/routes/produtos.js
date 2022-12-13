module.exports = function(application){

    application.get('/produtos', function(req,res){
        application.app.controllers.produtos.produtos(application, req, res)
    });

    application.get('/produto', function(req,res){
        application.app.controllers.produtos.produto(application, req, res)
    });
}