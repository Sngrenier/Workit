import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {SpotifyContext} from '../../context/SpotifyContext'

export default function useSpotifyAuth (code){

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()    
    const spotifyContext = useContext(SpotifyContext)

console.log(code)
    useEffect(()=>{
        console.log(code, 'code')
        axios.post('http://localhost:3333/spotifylogin/', {
        code,    
        }).then(res=>{
            console.log(res.data, 'useeffect')
            spotifyContext.setAccessToken(res.data.accessToken)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        }).catch(()=>{
            // window.location = '/'
        })

    }, [code])

 
  

    // useEffect(()=>{

    //     if(!refreshToken || !expiresIn) return 
    //     const interval = setInterval(()=>{

    //         axios.post('http://localhost:3000/refresh/', {
    //         refreshToken,    
    //         }).then(res=>{
    
    //            spotifyContext.setAccessToken(res.data.accessToken)
    //             // setRefreshToken(res.data.refreshToken)
    //             setExpiresIn(res.data.expiresIn)
    //             // window.history.pushState({}, null, '/')
    //         }).catch(()=>{
    //             window.location = '/'
    //         })
    //     }, (expiresIn - 60) * 1000)

    //     return ()=> clearInterval(interval)
    // }, [refreshToken, expiresIn])


    return accessToken

}

