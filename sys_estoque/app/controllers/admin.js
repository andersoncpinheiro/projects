//exportar uma propriedade chamada formulario_incs.....
//vamos precisar da instancia do servidor application
module.exports.formulario_inclusao_produto = function (application, req, res){
    res.render('admin/form_add_produto', { validacao : {}, produto : {} });
}

module.exports.produtos_salvar = function(application, req, res){
    var produto = req.body;

    req.assert('descricao', 'Descrição é obrigatório').notEmpty();
    req.assert('fabricante', 'Fabricante é obrigatório').notEmpty();
    req.assert('categoria', 'categoria é obrigatória').notEmpty();
    req.assert('valor_uni', 'Valor unitário é obrigatório').notEmpty();
    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_produto', {validacao: erros,  produto: produto});
        return;
    }

    var connection = application.config.dbConnection();
    var produtosModel = new application.app.models.ProdutosDAO(connection);

    produtosModel.salvarProduto(produto, function(error, result){
        res.redirect('/formulario_inclusao_produto');
    });
}


