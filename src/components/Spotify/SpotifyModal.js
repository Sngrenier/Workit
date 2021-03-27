
import {useState, useEffect} from 'react'
import Dropdown from './Dropdown'
import axios from 'axios'
import {Credentials} from './Credentials'
// import ListBox from './Listbox'

const SpotifyModal =()=> {

    const spotify = Credentials()

    const data = [
        
        {value: 1, name: 'A'},
        {value: 2, name: 'B'},
        {value: 3, name: 'C'}
        ]

    const [token, setToken] = useState('')
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []})
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []})
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []})
    const [trackDetail, setTrackDetail] = useState([])


    useEffect(()=>{
        axios(`https://accounts.spotify.com/api/token`, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic' +btoa(spotify.ClientId + ':' + spotify.ClientSecret)
        
        },

        data: 'grant_type=client_credentials',
        method: 'POST'
            
    }).then(tokenResponse => {
        console.log(tokenResponse.data.access_token)
        setToken(tokenResponse.data.access_token)
        
        
        axios(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer' + tokenResponse.data.access_token}

        })
        .then(genreResponse => {
            setGenres({
                selectedGenre: genres.selectedGenre,
                listOfGenresFromAPI: genreResponse.data.categories.items})
        })
        
        })

        }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret])


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





    const playlistChanged = val => {
        setPlaylist({
            selectedPlaylist: val,
            listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
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


    return (
    
    <div>Spotify Component

        <form onSubmit={()=> {}} > 
        <div className='spotifyContainer'>
        <Dropdown options={genres.listOfGenresFromAPI} slectedValue={genres.selectedGenre} changed={genreChanged} />
        <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
        <button type='submit'>Search</button>
        {/* <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}/> */}

        </div>
        </form>

    </div>
    
    
    )

}

export default SpotifyModal