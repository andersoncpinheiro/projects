module.exports = function(app){

app.get ('/admin',function(req,res){
  //  var connection = app.config.dbConnection();       
   // connection.query('select * from produto where id_produto = 1', function(error, result){
    //original
    res.render("admin/admin");
    //original
   // res.render("admin/admin", {admin: result});
    });

//});

app.post ('/produtos/salvar',function(req,res){
    var produtos = req.body;

    var connection = app.config.dbConnection();       
    var produtosModel = app.app.models.produtosModel;

   produtosModel.salvarProdutos(produtos, connection, function(error, result){
        res.redirect('/admin')
        });

    });
}