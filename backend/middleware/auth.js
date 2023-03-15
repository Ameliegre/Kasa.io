//Import des packages et fichiers 
const jwt = require('jsonwebtoken');
require('dotenv').config()

//Middleware qui extrait les infos du token en les verifiant pour le transmettre aux autres middleware ou gestionnaire de routes
const auth = ((req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SIGN_SECRET);
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
    next();
    } catch (error) {
        res.status(401).json({ error });
    }
});

//export du fichier
module.exports = auth;