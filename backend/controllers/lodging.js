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
        sql = "SELECT l.id,\
            l.title,\
            l.description,\
            l.rating,\
            l.location,\
            p.name AS picture_name,\
            p.id AS picture_id,\
            l.host_id,\
            h.name AS host_name,\
            h.picture AS host_picture,\
            ae.equipments_id,\
            e.name AS equipments_name,\
            ats.tags_id,\
            t.name AS tags_name\
        FROM logements l \
        JOIN pictures p ON l.id = p.logements_id \
        JOIN host h ON l.host_id = h.id\
        JOIN assoc_logements_equipment ae ON ae.logements_id = l.id \
        JOIN equipments e ON ae.equipments_id = e.id \
        JOIN assoc_tags_logements ats ON ats.logements_id = l.id \
        JOIN tags t ON ats.tags_id = t.id \
        WHERE l.id = ?";

        await db.query(sql, id, (err,result) => {
            if (err) {
                return console.error(err.message);
            }
            // Assuming the SQL query result is stored in a variable called 'rows'
            let formattedResult = {};

            // Loop through each row in the SQL result
            for (let i = 0; i < result.length; i++) {
                const row = result[i];
                
                // Create a new object for this row if it doesn't exist
                if (!formattedResult[row.id]) {
                    formattedResult[row.id] = {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    rating: row.rating,
                    location: row.location,
                    pictures: {},
                    host: {
                        id: row.host_id,
                        name: row.host_name,
                        picture: row.host_picture
                    },
                    equipments: {},
                    tags: {}
                    };
                }
                // Add the picture to the logement's pictures object if not already set
                if (row.picture_id && row.picture_name && !formattedResult[row.id].pictures[row.picture_id]) {
                    formattedResult[row.id].pictures[row.picture_id] = row.picture_name;
                }

                // Add the equipment to the logement's equipments object if not already set
                if (row.equipments_id && row.equipments_name && !formattedResult[row.id].equipments[row.equipments_id]) {
                    formattedResult[row.id].equipments[row.equipments_id] = row.equipments_name;
                }
                
                // Add the tags to the logement's tags object if not already set
                if (row.tags_id && row.tags_name && !formattedResult[row.id].tags[row.tags_id]) {
                    formattedResult[row.id].tags[row.tags_id] = row.tags_name;
                }
            }

            // Finally, convert the formattedResult object into an array
            formattedResult = Object.values(formattedResult);
            res.status(200).send(formattedResult)
            console.log(formattedResult)
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}