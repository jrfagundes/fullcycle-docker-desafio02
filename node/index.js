const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {    

    let body = '<p> <h1>Full Cycle Rocks!</h1> </p><br><p>'
    //inserindo dados no banco.
    const connection = mysql.createConnection(config)
    const incluirDados = `INSERT INTO people(name) values('José'),('Renato'),('Fagundes')`;
    connection.query(incluirDados)
    
    //Consultando dados do banco de dados
    connection.query('SELECT name FROM people', function (err, rows) {        
        if (!err && rows.length > 0) {     
                    
            for(let i=0; i<rows.length; i++) {
            body = body+String(rows[i].name)+'<br>'
            
            }
        } else {
            res.send([]);
        }
        body = body + '</p><br>'
        res.send( body )
        
    });
    connection.end       
})

app.listen(port, () => {
    console.log('Rodando na porta'+ port)
})