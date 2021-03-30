import {useState, useEffect} from 'react'
import SpotifyLogin from './SpotifyLogin'
import Dashboard from './Dashboard'


const code = new URLSearchParams(window.location.search).get('code')
const SpotifyWidget = () => {

 
    console.log(code, 'spotifyWidget code')

return (

    code? <Dashboard code={code}/> : <SpotifyLogin />
)


}

export default SpotifyWidget