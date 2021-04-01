import {useState, useContext, useEffect} from 'react'
// import {SpotifyContext} from '../../context/SpotifyContext'
import SpotifyPlayer from 'react-spotify-web-playback'
import Player from './Player'
import './SpotifyFooter.css'


const SpotifyFooter = ()=>{

// const spotifyContext = useContext(SpotifyContext)
// const [play, setPlay] = useState('')

// const {play, setPlay, accessToken, trackUri} = useContext(SpotifyContext)

// console.log(spotifyContext.trackUri, 'is the track uri being sent to the footer?')

    return(

        <div>
                 {/* <Player/> */}
            {/* <div><h1>SPOTIFY FOOTER COMPONENT YOOOOOO</h1></div> */}
            <footer className="spot-footer">

                <Player />
            </footer>
            {/* <div>Spotify Footer component</div>
            <SpotifyPlayer 
                token={spotifyContext.accessToken}
                showSaveIcon
                callback={state=> {
                if (!state.isPlaying) setPlay(false)
                }}
                play={play}
                uris={spotifyContext.trackUri ? [spotifyContext.trackUri] : []}/> */}

        </div>
    )

}

export default SpotifyFooter

//trackUri={spotifyContext.trackUri} inside Player render