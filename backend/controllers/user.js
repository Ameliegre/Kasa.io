//Import des packages et fichiers 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

//Fonction "nvx utilisateurs" avec hashage du mdp 
exports.signup = async (req,res,next) => {
    try {
        let user = req.body.user;
        let password = req.body.password;
        
        let sql = `INSERT INTO host (id, name, picture, email, password) VALUES (?,?,?,?,?)`;
        let values = [NULL,NULL,user,password];

        await db.query(sql, [values], (err, result, fields) => {
            if (err) {
                return console.error(err.message);
              }
            console.log(result)
            res.status(201).json({message:'Utilisateur créé avec succès!'}) 
        });
            
    } catch (error) {
        res.status(500).send("Erreur d'execution")
    }
}

//Fonction de connexion pour les utilisateurs déjà inscrit