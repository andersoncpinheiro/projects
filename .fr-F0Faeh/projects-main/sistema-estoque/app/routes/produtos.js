//var dbConnection = require('../../config/dbConnection')

module.exports = function(app){

   app.get ('/produtos',function(req,res){
      var connection = app.config.dbConnection();       
      var produtosModel = new app.app.models.produtosModel(connection);

     produtosModel.getProdutos(connection,function(error, result  ){
      res.render("produtos/produtos",{produtos: result});    
      });
   });

};