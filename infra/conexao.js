import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'E20092005d.',
    database:'bd_copa'
})

conexao.connect();

export default conexao;