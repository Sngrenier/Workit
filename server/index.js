require('dotenv').config()
const express = require('express')

authCtrl = require('./controllers/authController')
circuitCtrl= require(`./controllers/circuitController`)

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


//User Endpoints---------------------------

app.post(`/auth/register`, authCtrl.register)
app.post(`/auth/login`, authCtrl.login)
app.get(`/myaccount`, authCtrl.get_user)
app.post(`/logout`, authCtrl.log_out)


//Circuit Endpoints------------------------

app.get(`/circuitselection/:circuit_id`, circuitCtrl.read_circuit_selection)
app.post(`/completedcircuit`, circuitCtrl.completed_circuit)
app.get(`/viewcompletedcircuits`, circuitCtrl.view_completed_circuits)
app.post(`/quitreasons`, circuitCtrl.quit_reasons)

