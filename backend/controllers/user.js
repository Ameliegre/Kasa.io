//Import des packages et fichiers 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const db = require('../model/db');

//Fonction "nvx utilisateurs" avec hashage du mdp 
exports.signup = async (req,res,next) => {
    try {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(req.body.password, salt);

        let user = req.body.user;
        let password = hash;
        
        let sql = "INSERT INTO host SET ?";
        let values = {
            email: user,
            password: password
        };

        await db.query(sql, values, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(result)
            res.status(201).json({user: user, id: result.insertId}) 
        });
            
    } catch (error) {
        res.status(500).send(error)
    }
}

//Fonction de connexion pour les utilisateurs déjà inscrit
exports.login = async (req,res,next) => {
    try {
        let user = req.body.user;
        let password = req.body.password
        let sqlUser = "SELECT * FROM host WHERE email = ?"
        let userValue = [user]

        await db.query(sqlUser, userValue, (err, result) => {
            if (err) {
                return console.error(err.message);
            } else if (result.length === 0) {
                return res.status(401).send("Veuillez verifier vos identifiants")
            } else {
                console.log()
                bcrypt.compare(password, result[0].password, (err, resultBcrypt) => {
                    console.log('inscrit' , result)
                    if(resultBcrypt) {
                        res.status(201).json({
                            userId: result[0].id,
                            token: jwt.sign(
                                {userId: result[0].id},
                                process.env.JWT_SIGN_SECRET,
                                {expiresIn: '1h'}
                            )
                        })
                    } else {
                        return res.status(401).send("Veuillez verifier vos identifiants")
                    } 
                });  
            }
        });

    } catch (error) {
        res.status(500).send(error)
    }  
}