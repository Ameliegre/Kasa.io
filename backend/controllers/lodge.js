//Import des packages et fichiers
const db = require('../model/db');

exports.getAllLodge = async (req,res,next) => {
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

exports.getOneLodge = async (req,res,next) => {
    try {
        const id = req.params.id
        const sql = "SELECT l.id,\
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
            if (formattedResult.length > 0) {
                res.status(200).send(formattedResult)
            } else {
                res.status(404).send(formattedResult)
            }
            console.log(formattedResult)
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}

exports.createLodge = async (req, res, next) => {
    try {
      
        db.beginTransaction((err) => {
            if (err) {
            console.error('Error starting transaction: ', err);
            return;
            }

        const logementValues = {
        id: '00001',
        title: 'Maison de campagne',
        cover: 'https://i.f1g.fr/media/eidos/805x604_crop/2020/04/27/XVM6fdd6896-8650-11ea-bef4-6835ce68601a-805x604.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        host_id: 36,
        rating: 0,
        location: 'Vosges - Gérardmer'
        };

        const pictureValues = {
        name: 'https://i-mcr.unimedias.fr/sites/art-de-vivre/files/styles/large/public/cultfurniture_1159101.jpeg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=1022&w=900',
        logements_id: '00001'
        };

        const assocTagsValues = {
        logements_id: '00001',
        tags_id: 2
        };

        const assocLogementsEquipmentsValues = {
        logements_id: '00001',
        equipments_id: 55
        };

            db.query('INSERT INTO logements SET ?', logementValues, (err, result) => {
            if (err) {
                db.rollback(() => {
                console.error('Error inserting into logements table: ', err);
                
                });
                return;
            }

            const logementId = result.insertId;

            db.query('INSERT INTO pictures SET ?', [pictureValues], (err, result) => {
                if (err) {
                    db.rollback(() => {
                        console.error('Error inserting into pictures table: ', err);
                       
                    });
                return;
                }

            db.query('INSERT INTO assoc_tags_logements SET ?', [assocTagsValues], (err, result) => {
                if (err) {
                    db.rollback(() => {
                        console.error('Error inserting into assoc_tags_logements table: ', err);
                        
                    });
                return;
                }

            db.query('INSERT INTO assoc_logements_equipment SET ?', [assocLogementsEquipmentsValues], (err, result) => {
                if (err) {
              db.rollback(() => {
                console.error('Error inserting into assoc_logements_equipment table: ', err);
                
              });
              return;
            }

            db.commit((err) => {
              if (err) {
                db.rollback(() => {
                  console.error('Error committing transaction: ', err);
                  
                });
                return;
              }
              console.log('Transaction completed successfully.');
              res.status(200).send(result)
             
            });
          });
        });
      });
    });
  });
  
        
    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}

exports.deleteLodge = async (req, res, next) => {
    try {
        const id = req.params.id
        const sql = 'DELETE FROM `logements` WHERE `logements`.`id` = ? '

        await db.query(sql, id, (err, result) => {
            if (err) {
                return console.error(err.message)
            }
                console.log(result)
                res.status(200).send(result)
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}

exports.updateLodge = async (req, res, next) => {
    try {

        const id = req.params.id
        const logementValues = {
        title: 'Maison',
        cover: 'https://i.f1g.fr/media/eidos/805x604_crop/2020/04/27/XVM6fdd6896-8650-11ea-bef4-6835ce68601a-805x604.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        location: 'Vosges - Epinal'
        };

        const sql = 'UPDATE `logements` SET ? WHERE `logements`.`id` = ? '
        
        
        await db.query(sql, [logementValues, id],  (err, result) => {
            if (err) {
                return console.error(err.message)
            }
                console.log(result)
                res.status(200).send(result)
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({err})
    }
}