const mysql = require('mysql');

//Connexion à la BDD SQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

db.connect(function(err) { 
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
});

// db.query("SELECT * FROM about", (err, result) => {
//     if (err) {
//         return console.error(error.message);
//       }
//       console.log(result);
// })

module.exports = db; 