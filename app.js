const dotenv = require('dotenv').config(); // import .env as process.env 
const mgo =require('./database/mongoDB');

console.log(`Program running in: ${process.env.Mode} mode ...`);
mgo.connect();
mgo.update();
