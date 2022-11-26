module.exports = function(app){

app.get ('/admin',function(req,res){
    res.render("admin/admin");
});
app.post ('/produtos/salvar',function(req,res){
    var produtos = req.body;

    var connection = app.config.dbConnection();       
    var produtosModel = app.app.models.produtosModel;

   produtosModel.salvarProdutos(produtos, connection, function(error, result){
        res.redirect('/produtos')
        });

    });

   

}