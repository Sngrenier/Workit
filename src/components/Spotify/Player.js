import { useState, useEffect } from 'react';
// import PlayWidget from 'react-spotify-widgets';
import SpotifyPlayer from 'react-spotify-web-playback'



 
export default function Player({accessToken, trackUri}){

  const [play, setPlay] = useState(false)

  useEffect(()=>{
    setPlay(true)

  }, [trackUri])

  if(!accessToken) return null

  return (
  
    <SpotifyPlayer 
    token={accessToken}
    showSaveIcon
    callback={state=> {
      if (!state.isPlaying) setPlay(false)
    }}
    play={play}
    uris={trackUri ? [trackUri] : []}
  
    />
    // <div className='App'>
    //   <PlayWidget
    //     width={300}
    //     height={380}
    //     uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
    //     lightTheme={true}
    //   />
    //   <PlayWidget
    //     width={300}
    //     height={380}
    //     uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
    //   />
    //   <PlayWidget
    //     width={400}
    //     height={500}
    //     uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}
    //     viewCoverArt={true}
    //   />
    //   <PlayWidget
    //     width={300}
    //     height={80}
    //     uri={'spotify:album:6fyR4wBPwLHKcRtxgd4sGh'}/>
    // </div>
  )
}


  




