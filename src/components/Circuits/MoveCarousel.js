import {useState, useContext, useEffect} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import {useRef} from 'react'
import { ButtonContainer } from '../NavButton'
import './MoveCarousel.css'
import {Redirect, Link} from 'react-router-dom'
import styled, {keyframes} from "styled-components"
import {SpotifyContext} from '../../context/SpotifyContext'
import SpotifyPlayer from 'react-spotify-web-playback'
import Player from '../Spotify/Player'



const MoveCarousel = (props)=>{
const [index, setIndex] = useState(0)
const [play, setPlay] = useState(true)
const [timer, setTimer] = useState(20) 
const [countdown, setCountdown] = useState(5)
const [moves, setMoves] = useState([])
const [rounds, setRounds] = useState(2)
const [modal, setModal] = useState(true)


const spotifyContext = useContext(SpotifyContext)

const circuitContext = useContext(CircuitContext)
const videoRef = useRef()
const timerRef = useRef() //keeps track of the context when it updates, keeps track of the same object

// const timestamp = 402
// const hours = Math.floor(timestamp/60/60)
// const minutes = Math.floor(timestamp/60) - (hours * 60)
// const seconds = timestamp % 60
// const formatted = minutes + `:` + seconds

useEffect(()=>{
    setMoves(circuitContext.moves)
}, [circuitContext])



useEffect(()=>{
    timerRef.current=setInterval(() => {
        setCountdown(t=> t-1)
    }, 1000);
    return (()=>clearInterval(timerRef.current)) //will clean this up if the component unmounts
}, [])



useEffect(()=> {
    console.log(countdown)
    if(countdown === 0){
        setTimer(20)
        clearInterval(timerRef.current)
        if(rounds !== 0){
            if(videoRef.current){
                videoRef.current.play()
                timerRef.current = setInterval(()=> {
                    setTimer(t=> t-1)
                }, 1000)
            }
        }
    }
}, [countdown])



useEffect(()=> {
    if(timer === 0){
        clearInterval(timerRef.current)
        setModal(false)
        setRounds(r=> r-1)
        if(rounds !== 0){
            setIndex(moves.length-((rounds-1) * 4))
        }
        setCountdown(5)
        videoRef.current.pause()
        timerRef.current = setInterval(()=> {
            setCountdown(t=> t-1)
        }, 1000)
    }
}, [timer])



useEffect(()=>{
    if(videoRef.current && moves[index].gif){
        videoRef.current.load()
        videoRef.current.play()
        // videoRef.current.pause()
        if(countdown > 0 ){
            videoRef.current.pause()
            setTimeout(()=> {
                videoRef.current.play()
            }, countdown * 1000)
        }
    }
}, [index])



const playTimer = ()=> {
    if(!play){
        setPlay(true)
        // spotifyContext.setPlay(true)
        videoRef.current.play()
        timerRef.current = setInterval(()=> {
            if(timer-1 > 0) {
            setTimer(t=> t-1)
            }else { //stop video display time is up
            } 
        }, 1000)
    } else {
        setPlay(false)
        // spotifyContext.setPlay(false)
        videoRef.current.pause()
        clearInterval(timerRef.current)
    }
}

const closeModal = () => {
        setModal(false)
    }

   

return (
    <>
    {rounds > 0 ?
    <section>
        <div className="carousel-container">
        <div className="container-fluid content-container">

      
       {/* <ModalContainer onClick = {closeModal}> */}
        <div className="countdown">
            <div id="modal">
            {countdown < 4 && countdown > 0 ? 
            <p className="count">{countdown}...</p> : countdown === 0 ? 
            <p className="go" onAnimationEnd={_ => setCountdown(0)}>GO!</p> : null}
            </div>
            </div>
        {/* </ModalContainer> */}
               
            <div className="timer-header">
                <div className="space-1"></div>
                <div className="timer"><h4>0:{timer}</h4></div>
            </div>

        <div className="heading-timer">
            <div className="move-heading">
        {moves.length && index < moves.length && <h4>{moves[index].move_title}</h4>}
            </div>
            <div className="reps-line">
        {moves.length && index < moves.length && <h4>{moves[index].reps}</h4>}
            </div>
        </div> 

        <div className="move-scroll">
            <div className="move-gifs">
                {moves.length && index < moves.length && <video loop ref={videoRef} width={400} height={400}><source src={moves[index].gif} type='video/mp4'/></video>}
            </div>
            
            <div className="move-nav-btns">
                <img className="back-btn" src="https://img.icons8.com/ios-glyphs/40/000000/double-left.png"
                        alt='back-btn'
                    onClick = { () => {
                    if(index <= moves.length - (rounds * 4)) {
                        setIndex(moves.length - (rounds * 4) + 3)
                    } else{
                        setIndex(index-1)
                    }}}></img>
                        
                <ButtonContainer className="play-btn" onClick = {() => {playTimer()}}> {play ? 'pause' : 'play'} </ButtonContainer>  
                                
                <img className="forward-btn" src="https://img.icons8.com/ios-glyphs/40/000000/double-right.png" 
                        alt='forward-btn'
                    onClick = { () => {
                    if(index >= moves.length - (rounds * 4) + 3) {
                        setIndex(moves.length - (rounds * 4))
                    }else{
                        setIndex(index+1)
                    }}}></img>
            </div>

            <div className="quit-btn">

                <div className="spotify-icon">
                    <img className="spot-icon" src="https://img.icons8.com/ultraviolet/30/000000/spotify.png"/>
                    </div>

                <div>
                    <Link to="/quitCircuit">
                    <ButtonContainer className="quit">Quit Curcuit</ButtonContainer>
                    </Link>
                    </div>

                <div className="move-next">
                    <div className="up-next">
                    <h4>up next</h4>
                    </div>

                    <div className="move-name">
                    {moves.length && index < moves.length && <h4>{moves[index +1].move_title}</h4>}
                    </div>
                </div>

            </div>
        </div>

        </div> 
        </div> 


   
        </section>
          : <div> 
              <Redirect to='/CompletedCircuit'>
              </Redirect> You've completed the Circuit!!</div>  }
        </>
    )

}
export default MoveCarousel


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  .img-fluid {
    margin-bottom: 10%;
  }
`


// { spotifyContext.accessToken && 
//     <Player accessToken={spotifyContext.accessToken} trackUri={spotifyContext.uri}/>


// }