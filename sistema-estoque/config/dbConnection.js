var mysql = require('mysql');
module.exports = function(){
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'123456',
        database:'sys_estoque'
    });

}