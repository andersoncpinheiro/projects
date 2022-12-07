function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.getProduto = function(callback){
    this._connection.query('select * from produto p where p.id_produto = (select max(p.id_produto) from produto p', callback);
}

ProdutosDAO.prototype.getProdutos = function(callback){
    this._connection.query('select * from produto', callback);
}

ProdutosDAO.prototype.salvarProduto = function(produto, callback){
    this._connection.query('INSERT INTO produto SET ?', produto, callback);
}

module.exports = function(){
    return ProdutosDAO;
}