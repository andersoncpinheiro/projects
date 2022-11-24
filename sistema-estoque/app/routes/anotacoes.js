module.exports = function(app){

app.get ('/anotacoes',function(req,res){
    res.render("anotacoes/anotacoes");
});
};