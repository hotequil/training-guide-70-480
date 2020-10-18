//my module
// const server = require('./server.js');
//
// server.start();

//express module
const express = require('express');
const app = express();

app.get('/', (request, response) => response.send('hello dude!'));
app.listen(8080);

console.log('open in 8080');
