const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
//inserindo dados no banco.
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const incluirDados = `INSERT INTO people(name) values('Zé')`
connection.query(incluirDados)

let body = '<p> <h1>Full Cycle Rocks!</h1> </p><br><p>'

connection.query('SELECT name FROM people', function (err, rows) {
    if (!err && rows.length > 0) { 
        for(let i=0; i<rows.length; i++) {
        body = body+String(rows[i].name)+'<br>'
        }
    } else {
        res.send([]);
    }
    body = body+'</p><br>'
    
});
connection.end

app.get('/', (req, res) => {    
    
    return res.send( body )    
})

app.listen(port, () => {
    console.log('Rodando na porta'+ port)
})