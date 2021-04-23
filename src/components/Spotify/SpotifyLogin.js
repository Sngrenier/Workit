
import {Container } from 'react-bootstrap'
import { ButtonContainer } from '../NavButton'
import {Link} from 'react-router-dom'
import './SpotifyLogin.css'


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fcbfe81201584b93ad98a0ddd2c421db&response_type=code&redirect_uri=http://localhost:3000/spotify&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"




export default function SpotifyLogin(){

      return (

        <div className="spot-login-container">
          <div className="spot-login">
        <Container
          className="spotify-login"
          // style={{ minHeight: "20vh" }}
        >
          <ButtonContainer className="btn-success"><a className="btn success" href={AUTH_URL}>
            Login With Spotify
          </a>
          </ButtonContainer>
        </Container>
          <Link to='/landing'>
            <ButtonContainer className="no-Spotify-btn">No need - Pumping my own beats!</ButtonContainer>
            </Link> 

          </div>
        </div>
      )
    }
    





