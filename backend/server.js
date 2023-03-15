//Import du package HTTP 
const http = require('http');
const app = require('./app');
require('dotenv').config();

//Attribue un nom à une valeur
app.set('port', 3000);

//Création du server
const server = http.createServer(app);

server.listen(process.env.PORT || 3001);