function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.getProduto = function(callback){
    this._connection.query('SELECT id_produto, descricao, fabricante, valor_uni FROM produto ORDER BY id_produto DESC LIMIT 1', callback);
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