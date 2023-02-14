//Import des packages et fichiers
const db = require('../model/db');

exports.getAllLodging = async (req,res,next) => {
    try {
        await db.query("SELECT id, title, cover FROM logements", (err, result) => {
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

exports.getOneLodging = async (req,res,next) => {
    try {

        const id = req.params.id
        sql = "SELECT l.id AS id, l.title AS title, l.description AS description, l.rating AS rating, l.location AS location, l.host_id AS host_id FROM logements l WHERE l.id = ? "

        await db.query(sql, id, (err,result) => {
            if (err) {
                return console.error(err.message);
            }
                res.status(200).send(result)
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}