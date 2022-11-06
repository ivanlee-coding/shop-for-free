const dotenv = require('dotenv').config(); // import .env as process.env 
const mgo =require('./database/mongoDB');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// mgo.connect();
// mgo.update();

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {res.render('index');});

app.listen(process.env.EXPRESS_SERVER_PORT);

console.log(`Program running in: ${process.env.MODE} mode, using port: ${process.env.EXPRESS_SERVER_PORT} ...`);
// app.use(express.static('www'));