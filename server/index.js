require('dotenv').config()
const express = require('express')

authCtrl = require('./controllers/authController')
circuitCtrl= require(`./controllers/circuitController`)
profileCtrl = require(`./controllers/profileController`)

const massive = require('massive')
const session = require('express-session')
const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

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


    app.use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}

    }))


//User Endpoints---------------------------

app.post(`/auth/register`, authCtrl.register)
app.post(`/auth/login`, authCtrl.login)
app.get(`/myaccount`, authCtrl.get_user)
app.post(`/logout`, authCtrl.logout)


//Circuit Endpoints------------------------

app.get(`/circuits`, circuitCtrl.read_all_circuits)
app.get(`/circuitselection/:circuit_id`, circuitCtrl.read_circuit_selection)
app.get(`/moves/:circuit_id`, circuitCtrl.read_moves)
app.get(`/moves/:move_id`, circuitCtrl.read_steps)
app.post(`/completedcircuit`, circuitCtrl.completed_circuit)
app.get(`/viewcompletedcircuits`, circuitCtrl.view_completed_circuits)
app.post(`/quitreasons`, circuitCtrl.quit_reasons)

//Profile Endpoints ------------------------------

app.put(`/editbirthday`, profileCtrl.edit_birthday)