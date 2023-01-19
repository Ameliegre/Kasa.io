const mysql = require('mysql');

//Connexion à la BDD SQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Kasa',
    port: 3306
})

db.connect(function(err) {   
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
});

module.exports = db; 