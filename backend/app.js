//Import des packages 
const express = require('express');
require('dotenv').config();
const mysql = require('mysql');

//Import des routes

//Connexion à la BDD SQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Kasa',
    port: 3306,
})

db.connect(function(err) {   
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
});


//Appel de la methode pour créer une application
const app = express();

app.use(express.json());

//Permet à l'application d'acceder à l'API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS', req.method);
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Renvoi des routes vers le frontend
app.get('/',(req,res) => {
    res.status(300).send('hello express') 
});

//export du fichier
module.exports = app;