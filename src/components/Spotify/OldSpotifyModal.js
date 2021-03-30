
// import {useState, useEffect} from 'react'
// import Dropdown from './Dropdown'
// import axios from 'axios'
// import Listbox from './Listbox'
// import Detail from './Detail'
// import './SpotifyModal.css'
// import { ButtonContainer } from '../NavButton'
// import Spotify from 'spotify-web-api-js'

// const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} = process.env


// const OldSpotifyModal =()=> {

    
//     const spotifyWebApi = new Spotify()
//     const client_id = REACT_APP_CLIENT_ID
//     const client_secret= REACT_APP_CLIENT_SECRET
//     // const redirect_uri= REACT_APP_REDIRECT_URI

 

//     const [token, setToken] = useState('')
//     // const [loggedIn, setLoggedIn] = useState({loggedIn: params.access_token ? true : false})
//     const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []})
//     const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []})
//     const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []})
//     const [trackDetail, setTrackDetail] = useState(null)



//     useEffect(()=>{
//         setToken(getHashParams())

//     },[])

//     console.log(token, 'gethashparamstoken')

//     function getHashParams() {
//         var hashParams = {};
//         var e, r = /([^&;=]+)=?([^&;]*)/g,
//             q = window.location.hash.substring(1);
//         while ( e = r.exec(q)) {
//            hashParams[e[1]] = decodeURIComponent(e[2]);
//         }
//         return hashParams;
//       }
 


//     useEffect(()=>{
//         axios(`https://accounts.spotify.com/api/token`, {
//         headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded',
//             'Authorization' : 'Basic' +btoa(client_id + ':' + client_secret)
        
//         },

//         data: 'grant_type=authorization_code',
//         method: 'POST'
            
//     }).then(tokenResponse => {
//         console.log(tokenResponse.data.access_token, 'is the token coming through from the axios call?')
//         setToken(tokenResponse.data.access_token)
        
        
//         axios(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//             method: 'GET',
//             headers: {'Authorization' : 'Bearer' + tokenResponse.data.access_token}

//         })
//         .then(genreResponse => {
//             setGenres({
//                 selectedGenre: genres.selectedGenre,
//                 listOfGenresFromAPI: genreResponse.data.categories.items})
//         })
        
//         })

//         }, [genres.selectedGenre, client_id, client_secret])


//         // if(params.access_token){
//         //     spotifyWebApi.setToken(params.access_token)
//         //     console.log(params.access_token, 'where is the access token??')
//         // }
         
        

        const genreChanged = val =>{
            setGenres({
                selectedGenre: val,
                listOfGenresFromAPI: genres.listOfGenresFromAPI

            })
            axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
                method: 'GET',
                headers: {'Authorization' : 'Bearer' + token}
                
            })    
            .then(playlistResponse => {
                setPlaylist({
                    selectedPlaylist: playlist.selectedPlaylist,
                    listOfPlaylistFromAPI: playlistResponse.data.playlists.items
                })
            })
        }





//     const playlistChanged = val => {
//         setPlaylist({
//             selectedPlaylist: val,
//             listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
//         })
//     }


//     const buttonClicked = e =>{
//         e.preventDefault()

//         axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
//             method: 'GET',
//             headers: {
//                 'Authorization' : 'Bearer' + token
//             }
//         }).then(tracksResponse =>{
//             setTracks({
//                 selectedTrack: tracks.selectedTrack,
//                 listOfTracksFromAPI: tracksResponse.data.items
//             })
//         })
//     }


//     const listboxClicked = val => {
//         const currentTracks = [...tracks.listOfTracksFromAPI]
//         const trackInfo = currentTracks.filter(t => t.track.id === val)
//         setTrackDetail(trackInfo[0].track)

//     }

//     console.log(token, 'did it setToken??')
//     // console.log(params, 'params')


//     return (
    
//     <div>

//         <form onSubmit={buttonClicked} > 
//         <div className='spotifyContainer'>
//         <Dropdown options={genres.listOfGenresFromAPI} slectedValue={genres.selectedGenre} changed={genreChanged} />
//         <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
//         <ButtonContainer type='submit'>Search</ButtonContainer>
//         <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}/>
//         {trackDetail && <Detail {...trackDetail}/> }

//         </div>
//         </form>

//     </div>
    
    
//     )

// }

// export default OldSpotifyModal