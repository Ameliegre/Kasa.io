//Import des packages et fichiers 
const router = require('express').Router();
const userCtrl = require('../controllers/user');

//Création des routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//export du fichier
module.exports = router;