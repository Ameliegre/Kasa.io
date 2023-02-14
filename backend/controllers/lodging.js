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
        sql = "SELECT l.id AS id, l.title AS title, l.description AS description, l.rating AS rating, l.location AS location, p.name AS pictures, l.host_id AS host_id, h.name AS host_name, h.picture AS host_picture, ae.equipments_id, e.name AS equipments_name FROM logements l JOIN pictures p ON l.id = p.logements_id JOIN host h ON l.host_id = h.id JOIN assoc_logements_equipment ae ON ae.logements_id = l.id JOIN equipments e ON ae.equipments_id = e.id JOIN assoc_tags_logements ats ON ats.logements_id = l.id JOIN tags t ON ats.tags_id = t.id WHERE l.id = ? "

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