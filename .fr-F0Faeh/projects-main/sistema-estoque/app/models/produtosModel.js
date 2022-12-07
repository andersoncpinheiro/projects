
//usando modelo mvc aplicamos o module abaixo em uma classes



module.exports = function(){

   this.getProdutos = function(connection, callback){
    connection.query('select * from produto', callback);
   }

   this.getProduto = function(connection, callback){
    connection.query ("select * from produto p where p.id_produto = (select max(p.id_produto) from produto p)", callback);
   }

   this.salvarProdutos = function(produtos, connection, callback){
    connection.query('insert into produto set ?', produtos, callback)
   }
   return this;
}