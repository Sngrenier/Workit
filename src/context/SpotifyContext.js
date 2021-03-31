import {useState, createContext, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node'

const {REACT_APP_CLIENT_ID} = process.env

export const SpotifyContext = createContext()
const spotifyApi = new SpotifyWebApi({
    clientId: REACT_APP_CLIENT_ID
})
export const SpotifyProvider = (props) => {

const [play, setPlay] = useState(false)
const [uri, setUri] = useState('')
const [accessToken, setAccessToken] =useState('')


const { push } = useHistory()

useEffect(()=>{
    if(!accessToken) return

    spotifyApi.setAccessToken(accessToken)
}, [accessToken])


// const playButton = () => {


// }


// useEffect(()=>{
//     console.log(code, 'code')
//     axios.post('http://localhost:3333/spotifylogin/', {
//     code,    
//     }).then(res=>{
//         console.log(res.data, 'useeffect')
//         setAccessToken(res.data.accessToken)
//         setRefreshToken(res.data.refreshToken)
//         setExpiresIn(res.data.expiresIn)
//         window.history.pushState({}, null, '/')
//     }).catch(()=>{
//         // window.location = '/'
//     })

// }, [code])




return(
    <SpotifyContext.Provider value={{play, setPlay, accessToken, setAccessToken, uri, setUri, spotifyApi}}>
    {props.children}
    </SpotifyContext.Provider>

)
}
