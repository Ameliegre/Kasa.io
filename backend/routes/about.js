//Import des packages et fichiers 
const router = require('express').Router();
const aboutCtrl = require('../controllers/about')

const auth = require('../middleware/auth');

//Création des routes
router.get('/about', aboutCtrl.about);

//export du fichier
module.exports = router;