//Import des packages et fichiers 
const router = require('express').Router();
const userCtrl = require('../controllers/user');

//Création des routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.updateProfil);
router.delete('/:id', userCtrl.deleteProfil);

//export du fichier
module.exports = router;