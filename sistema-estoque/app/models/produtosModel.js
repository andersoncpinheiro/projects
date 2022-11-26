module.exports = function(){

   this.getProdutos = function(connection, callback){
    connection.query('select * from produto', callback);
   }

this.salvarProdutos = function(produtos, connection, callback){
    connection.query('insert into produto set ?', produtos, callback)
}
   return this;
}