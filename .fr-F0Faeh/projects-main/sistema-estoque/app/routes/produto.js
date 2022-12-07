module.exports = function(app){

    app.get ('/produto',function(req,res){
      var connection = app.config.dbConnection();       
      var produtosModel = new app.app.models.produtosModel(connection);     
 
      produtosModel.getProduto(connection,function(error, result  ){
         res.render("produtos/produto",{produto: result});    
         });
    });
 
 };