
import {Container, Form} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
// import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import useSpotifyAuth from './UseSpotifyAuth'
import {SpotifyContext} from '../../context/SpotifyContext'
import {useHistory, Link} from 'react-router-dom'
import { ButtonContainer } from '../NavButton'
import styled from 'styled-components'
import './Dashboard.css'

const {REACT_APP_CLIENT_ID} = process.env

// const spotifyApi = new SpotifyWebApi({
//     clientId: REACT_APP_CLIENT_ID
// })



export default function Dashboard(props){
    const history = useHistory()
    console.log(props, 'dashboardcode')
    // const spotifyContext = useContext(SpotifyContext)
    const {setUri, spotifyApi} = useContext(SpotifyContext)
    const accessToken = useSpotifyAuth(props.code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()


    const chooseTrack = (track)=>{
        setUri(track.uri)
        // spotifyContext.setUri(track.uri)
        history.push('/landing')
        console.log(track.uri)
        setPlayingTrack(track)
        setSearch('')

    }

    // useEffect(()=>{
    //     if(!accessToken) return

    //     spotifyApi.setAccessToken(accessToken)
    // }, [accessToken])

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


    return  <div>

        <DashboardWrapper className='container-fluid'>
            <div className='card'>
            <div><h4 className='spotify-subtitle-text'>Queue up your jam!</h4></div>
            <div className='spotify-title-text' > Select some music and head to the Circuits to start your workout!</div>
            </div>
        </DashboardWrapper>


            <Link to='/landing'><ButtonContainer className="spotify-nav-btn">Circuits</ButtonContainer></Link> 
            <Link to='/profile'><ButtonContainer className="spotify-nav-btn">Profile</ButtonContainer></Link> 
            <Link to='/instructors'><ButtonContainer className="spotify-nav-btn">Meet The Trainers</ButtonContainer></Link>
           
            <Container className='d-flex flex-column py-2'
                        style={{height: '50vh'}}
            >
                <Form.Control 
                type='search' 
                placeholder='Search Songs/ Artists'
                value={search} 
                onChange={e=> setSearch(e.target.value)}
                />
            <div className='flex-grow-1 my-2' style={{overflowY: 'auto'}}>
            
            
             {searchResults.map(track=>(
               <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />     

             ))}
             
             </div>
        {/* <div><Player accessToken={accessToken} trackUri={playingTrack?.uri}/></div> */}

    </Container>
    </div>
}


const DashboardWrapper = styled.div`
.card{
    border-color: transparent;
    border-radius: 15%;
    transition: all 0.5s linear;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-start;
    margin: auto;
    background-color: transparent;  
    margin-bottom: 10%;

}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        border-radius: 15%;
    }
}
@media screen and (min-width: 520px) and (max-width: 1800px) {
    .img-container{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: flex-start;
        margin: auto;
        background-color: transparent;  
    } 
    .cir-info{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-top: 5%;
        margin-bottom: -15%;
        margin-right: -25%;
    }
    .spotify-subtitle-text{
        font-family: roboto !important;
            font-weight:900 !important;
            font-size: .7rem !important;
            color: #65d6ce;
            margin:.35%;
    }
    .spotify-title-text{
        font-family: roboto !important;
        font-weight: 700 !important;
        font-size: 1.7rem !important;
        color: var(--mainDark);
        margin:.35%;
    }
    .info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);
        padding-bottom: 5%;
    } 
}

@media screen and (min-width: 200px) and (max-width: 520px) {
    .img-container{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: flex-start;
        margin: auto;
        background-color: transparent;  
    } 
    .cir-info{
        width: 60vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-top: 5%;
        margin-bottom: -25%;
    }
    .instructor-subtitle-text{
        font-family: roboto;
            font-weight:900;
            font-size: .7rem;
            color: #65d6ce;
            margin:.35%;
    }
    .instructor-title-text{
        font-family: roboto;
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--mainDark);
        margin:.35%;
    }
    .instructor-info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);

    } 
}

`