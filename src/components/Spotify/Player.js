import { useState, useEffect, useContext } from 'react';
// import PlayWidget from 'react-spotify-widgets';
import SpotifyPlayer from 'react-spotify-web-playback'
import {SpotifyContext} from '../../context/SpotifyContext'
import './Player.css'


 
export default function Player(){

  // const [play, setPlay] = useState(false)
  //accessToken, trackUri inside of player parameters

  const {play, setPlay, accessToken, uri, chooseTrack} = useContext(SpotifyContext)

    useEffect(()=>{
      if(accessToken){
        setPlay(true)
      }
    },[accessToken])

  // useEffect(()=>{
  //   setPlay(true)

  // }, [trackUri])

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


  




