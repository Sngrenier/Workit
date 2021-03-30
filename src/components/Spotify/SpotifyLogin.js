
import {Container } from 'react-bootstrap'
// import {useState, useEffect} from 'react'
// import axios from 'axios'


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000/spotify&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

// const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_AUTH_URL} = process.env

export default function SpotifyLogin(){
      return (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login With Spotify
          </a>
        </Container>
      )
    }
    





