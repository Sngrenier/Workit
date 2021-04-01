import {useState, useContext, useEffect} from 'react'
import {SpotifyContext} from '../../context/SpotifyContext'
import SpotifyPlayer from 'react-spotify-web-playback'
import Player from './Player'


const SpotifyFooter = ()=>{

const spotifyContext = useContext(SpotifyContext)
const [play, setPlay] = useState('')

    return(

        <div>

            <footer>

                <Player/>
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