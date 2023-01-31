const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();


// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



// Path Publico
const publicpath = path.resolve(__dirname, 'public');
app.use( express.static(publicpath));


server.listen(process.env.PORT, (err) =>{

    if (err) throw new Error(err);

    console.log('Servidor Correndo na porta', process.env.PORT);

});