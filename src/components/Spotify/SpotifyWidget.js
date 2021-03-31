import {useState, useEffect, useContext} from 'react'
import SpotifyLogin from './SpotifyLogin'
import Dashboard from './Dashboard'
import {SpotifyContext, SpotifyProvider} from '../../context/SpotifyContext'


const code = new URLSearchParams(window.location.search).get('code')
console.log(code, 'codewidget')

export default function SpotifyWidget(){
const spotify = useContext(SpotifyContext)

    // useEffect(()=>{
    //     // spotify.setAccessToken(code)
    // },[])

    console.log(code, 'spotifyWidget code')

    console.log('anything')
    
    return (

        <div>

 
            {code? <Dashboard code={code}/> : <SpotifyLogin />}


        </div>
    
    )

} 

 




