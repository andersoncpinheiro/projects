module.exports = function(application){
    application.get('/formulario_inclusao_produto', function(req,res){
        application.app.controllers.admin.formulario_inclusao_produto(application, req, res);
    });

    application.post('/produtos/salvar', function(req,res){
        application.app.controllers.admin.produtos_salvar(application, req, res);
    });
}

