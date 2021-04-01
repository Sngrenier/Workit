import {useState, createContext, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'

const {REACT_APP_CLIENT_ID} = process.env

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fcbfe81201584b93ad98a0ddd2c421db&response_type=code&redirect_uri=http://localhost:3000/spotify&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const code = new URLSearchParams(window.location.search).get("code")


export const SpotifyContext = createContext()


const spotifyApi = new SpotifyWebApi({
    clientId: REACT_APP_CLIENT_ID
})


export const SpotifyProvider = ({ children }) => {



const [play, setPlay] = useState(false)
const [uri, setUri] = useState('')
const [accessToken, setAccessToken] =useState('')
const [refreshToken, setRefreshToken] =useState('')
const [expiresIn, setExpiresIn] = useState('')
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([])
const [playingTrack, setPlayingTrack] = useState()


const { push } = useHistory()

useEffect(()=>{
    if(!accessToken) return

    spotifyApi.setAccessToken(accessToken)
}, [accessToken])



// useEffect(()=>{
//     console.log(code, 'code')
//     axios.post('http://localhost:3333/spotifylogin/', {
//     code,    
//     }).then(res=>{
//         console.log(res.data, 'useeffect')
//         // spotifyContext.setAccessToken(res.data.accessToken)
//         setAccessToken(res.data.accessToken)
//         setRefreshToken(res.data.refreshToken)
//         setExpiresIn(res.data.expiresIn)
//         window.history.pushState({}, null, '/')
//     }).catch(()=>{
//         // window.location = '/'
//     })

// }, [code])



const chooseTrack = (track)=>{
    setUri(track.uri)
    
    // history.push('/movecarousel')
    console.log(track.uri)
    setPlayingTrack(track)
    setSearch('')

}


useEffect(()=>{

    if(!search) return setSearchResults([])
    if(!accessToken) return 

    let cancel = false 
    spotifyApi.searchTracks(search).then(res=>{
        if (cancel) return
        setSearchResults(res.body.tracks.items.map(track => {
            const smallestAlbumImage = track.album.images.reduce((smallest, image)=> {
                if(image.height < smallest.height) return image
                return smallest
            }, track.album.images[0])

           return{
         artist: track.artists[0].name,
         title: track.name,
         uri: track.uri,
         albumUrl: smallestAlbumImage.url
           }   
        }))

    })

    return ()=> cancel = true

}, [search, accessToken])






return(
    <SpotifyContext.Provider 
    
    value={{
            AUTH_URL,
            code,
            play, 
            setPlay, 
            accessToken, 
            setAccessToken, 
            refreshToken,
            setRefreshToken,
            expiresIn,
            setExpiresIn,
            uri, 
            setUri, 
            spotifyApi}}>
    
    
    
    {children}
    </SpotifyContext.Provider>

)
}
