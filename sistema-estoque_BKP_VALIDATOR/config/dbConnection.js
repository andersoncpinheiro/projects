var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sys_estoque'
    });
}

module.exports = function(){
    return connMySQL;
}