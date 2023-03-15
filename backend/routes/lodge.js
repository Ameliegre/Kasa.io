//Import des packages et fichiers 
const router = require('express').Router();
const lodgeCtrl = require('../controllers/lodge')

const auth = require('../middleware/auth');

//Création des routes
router.get('/lodge', lodgeCtrl.getAllLodge);
router.get('/lodge/:id', lodgeCtrl.getOneLodge);
router.post('/lodge', lodgeCtrl.createLodge);
router.delete('/lodge/:id', lodgeCtrl.deleteLodge);
router.put('/lodge/:id', lodgeCtrl.updateLodge);

//export du fichier
module.exports = router;