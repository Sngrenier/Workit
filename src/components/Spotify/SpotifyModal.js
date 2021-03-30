import {useState, useEffect} from 'react'
// import { useParams } from 'react-router'
import './SpotifyModal.css'
import Dropdown from './Dropdown'
import axios from 'axios'
import Listbox from './Listbox'
import Detail from './Detail'
import './SpotifyModal.css'
import { ButtonContainer } from '../NavButton'
import Spotify from 'spotify-web-api-js'


const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} = process.env


const SpotifyModal = ()=>{
    const params = getHashParams()
    const client_id = REACT_APP_CLIENT_ID
    const client_secret= REACT_APP_CLIENT_SECRET
    // const [loggedIn, setLoggedIn] = useState({loggedIn: token.access_token ? true : false})
    const [token, setToken] = useState('')
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []})
        const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []})
        const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []})
        const [trackDetail, setTrackDetail] = useState(null)
    
    
        const[tracks2, setTracks2] = useState({})
    // const spotifyWebApi = new Spotify()
    // const {getHashParams} = useParams()


    // if(token.access_token){
    //         spotifyWebApi.setAccessToken(token.access_token)

    // }

    useEffect(()=>{
        setToken(getHashParams().access_token)

    },[])



    useEffect(()=>{


        if(token){
            axios(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer' + token}

        })
        .then(genreResponse => {
            setGenres({
                selectedGenre: genres.selectedGenre,
                listOfGenresFromAPI: genreResponse.data.categories.items})

       }).catch(error=> console.log(error))



       axios(`https://api.spotify.com/v1/me/tracks?market=US&limit=10&offset=5`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + token}

    }).then(trackResponse =>{
        setTracks2(trackResponse.data)

    }).catch(err=> console.log(err.response.data, 'tracks api'))
    

        }     
        },[token])
  
            
    


        






       
    const retrieveTracks = () => {
        axios(`https://api.spotify.com/v1/me/tracks?market=US&limit=10&offset=5`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : 'Bearer' + token}
        
            }).then(trackResponse =>{
                setTracks2(trackResponse.data)
        
            })
            

    }
   


    function getHashParams() {
        console.log(window.location.pathname.substring(9))
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.pathname.substring(9);

        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }


      

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

 
        const buttonClicked = e =>{
        e.preventDefault()

        axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer' + token
            }
        }).then(tracksResponse =>{
            setTracks({
                selectedTrack: tracks.selectedTrack,
                listOfTracksFromAPI: tracksResponse.data.items
            })
        })
    }


        const listboxClicked = val => {
        const currentTracks = [...tracks.listOfTracksFromAPI]
        const trackInfo = currentTracks.filter(t => t.track.id === val)
        setTrackDetail(trackInfo[0].track)

    }

        const playlistChanged = val => {
        setPlaylist({
            selectedPlaylist: val,
            listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
        })
    }

    
   
    console.log(genres, 'genres')
    console.log(token, 'actual access token in the object')
    console.log(tracks2, 'useEffect tracks data')

 


    return (
        <div>

        <form onSubmit={buttonClicked} > 
            <div className='spotifyContainer'>
                <Dropdown options={genres.listOfGenresFromAPI} slectedValue={genres.selectedGenre} changed={genreChanged} />
                <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
                <ButtonContainer type='submit'>Search</ButtonContainer>
                <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}/>
                {trackDetail && <Detail {...trackDetail}/> }

            </div>
         </form>
        </div>
        
        )


}

export default SpotifyModal