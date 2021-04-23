import {useEffect, useContext } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'
import {SpotifyContext} from '../../context/SpotifyContext'
import './Player.css'


 
export default function Player(){



  const {play, setPlay, accessToken, uri} = useContext(SpotifyContext)

    useEffect(()=>{
      if(accessToken){
        setPlay(true)
      }
    },[accessToken])


  if(!accessToken) return null

  return (
  <footer>
    <SpotifyPlayer 
    token={accessToken}
    showSaveIcon
    callback={state=> {
      !state.isPlaying && setPlay(false)
    }}
    play={play}
    uris={uri ? [uri] : []}
  
    />
  </footer>
  )
}


  




