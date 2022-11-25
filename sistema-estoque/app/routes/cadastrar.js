var dbConnection = require('../../config/dbConnection')

module.exports = function(app){
    app.get ('/cadastrar',function(req,res){

    var connection = dbConnection();    
        
    connection.query('select * from produto', function(error, result ){
         res.render("cadastrar/cadastrar",{cadastrar: result});
});
   // res.render("cadastrar/cadastrar");
});

};