//Import des packages et fichiers
const db = require('../model/db');

//Fonction qui renvoie un tableau de tous les textes about de la base de données.
exports.about = async (req,res, next) => {
    try {
        await db.query("SELECT * FROM about", (err, result) => {
            if (err) {
                return console.error(err.message);
            }
                res.status(200).send(result)
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}