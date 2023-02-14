//Import des packages et fichiers 
const router = require('express').Router();
const lodgingCtrl = require('../controllers/lodging')

const auth = require('../middleware/auth');

//Création des routes
router.get('/lodging', lodgingCtrl.getAllLodging);
router.get('/lodging/:id', lodgingCtrl.getOneLodging);

//export du fichier
module.exports = router;