
import {Container, Form} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import TrackSearchResult from './TrackSearchResult'
import useSpotifyAuth from './UseSpotifyAuth'
import {SpotifyContext} from '../../context/SpotifyContext'
import {useHistory, Link} from 'react-router-dom'
import { ButtonContainer } from '../NavButton'
import styled from 'styled-components'
import './Dashboard.css'




export default function Dashboard(props){
    const history = useHistory()
    console.log(props, 'dashboardcode')
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


    return  <div classname="dashboard-container">

        <DashboardWrapper className='spotify-content'>
            <div className='spotify-info'>
            </div>
        </DashboardWrapper>

            <div className="spot-info-box">
                <h4 className='spotify-subtitle-text'>Queue up your jam!</h4>
                <h4 className='spotify-title-text'>Select some music and head to the Circuits to start your workout!</h4>
            </div>

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
      

    </Container>
    </div>
}


const DashboardWrapper = styled.div`
.spotify-info{
    border-color: transparent;
    border-radius-bottom: 15%;
    transition: all 0.5s linear;
    height:25vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin: auto;
    margin-bottom: 10%;
    background-image: url("https://besthqwallpapers.com/Uploads/3-12-2020/147986/thumb-music-neon-icon-4k-violet-background-neon-symbols-music.jpg");
    background-size: cover;
}
.spotify-subtitle-text{
    font-family: roboto !important;
    font-weight: 700 !important;
    font-size: 1.7rem !important;
    color: var(--mainwhite)!important;
    margin:.35%;
}
.spotify-title-text{

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