import {useContext} from 'react'
import SpotifyLogin from './SpotifyLogin'
import Dashboard from './Dashboard'
import {SpotifyContext} from '../../context/SpotifyContext'


const code = new URLSearchParams(window.location.search).get('code')
console.log(code, 'codewidget')

export default function SpotifyWidget(){
useContext(SpotifyContext)

   
   
    return (

        <>
            {code? <Dashboard code={code}/> : <SpotifyLogin />}
        </>
    
    )
} 

 




