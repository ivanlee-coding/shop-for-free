const dotenv = require('dotenv').config(); // import .env as process.env 
const mgo =require('./database/mongoDB');
const express = require('express');
const app = express();

console.log(`Program running in: ${process.env.Mode} mode, using port: ${process.env.EXPRESS_SERVER_PORT} ...`);
// mgo.connect();
// mgo.update();

app.listen(process.env.EXPRESS_SERVER_PORT);

app.use(express.static('www'));