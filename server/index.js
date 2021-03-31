require('dotenv').config()
const express = require('express')

authCtrl = require('./controllers/authController')
circuitCtrl= require(`./controllers/circuitController`)
profileCtrl = require(`./controllers/profileController`)

const massive = require('massive')
const session = require('express-session')
const app = express();
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env

app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


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


app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
    
        redirect_uri: REACT_APP_REDIRECT_URI,
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
        refreshToken, 
    })

    spotifyApi.refreshAccessToken().then(
        (data)=>{
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
            console.log(data.body)
        }).catch(()=>{
            console.log('Could not refresh access token', err)
            res.sendStatus(400)
        })
})

app.post('/spotifylogin/', (req, res) =>{
    const code = req.body.code
    console.log(req.body.code, 'req.body.code')
    const spotifyApi = new SpotifyWebApi({
    
        redirectUri: REACT_APP_REDIRECT_URI,
        clientId: REACT_APP_CLIENT_ID,
        clientSecret: REACT_APP_CLIENT_SECRET
    })

    console.log(REACT_APP_REDIRECT_URI, REACT_APP_CLIENT_ID)
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err)=>{
        console.log(err, '/spotifylogin from index.js')
        
        res.sendStatus(400)
    })
})




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

app.post(`/updateprofile`, profileCtrl.update_profile)
app.get(`/instructors`, profileCtrl.instructors)
app.get(`/getpicture`, profileCtrl.getPicture)
app.post(`/submitpicture`, profileCtrl.submitPicture)