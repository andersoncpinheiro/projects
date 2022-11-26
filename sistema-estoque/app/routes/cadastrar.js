module.exports = function(app){

app.get ('/cadastrar',function(req,res){
    res.render("cadastrar/cadastrar");
});
};