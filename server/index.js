require('dotenv').config()
const express = require('express')

authCtrl = require('./controllers/authController')

const massive = require('massive')
const session = require('express-session')
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());


massive({
    connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}, 
 })
    .then((db)  => {
        app.set('db', db)
        console.log('db connected')
        app.listen(SERVER_PORT, ()=> console.log(`running on ${SERVER_PORT}`));
    })


//Endpoints---------------------------

