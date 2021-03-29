import {useState, useContext, useEffect} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import {useRef} from 'react'
import { ButtonContainer } from '../NavButton'
import './MoveCarousel.css'
import {Redirect} from 'react-router-dom'
import styled, {keyframes} from "styled-components"



const MoveCarousel = (props)=>{

const[index, setIndex] = useState(0)
const [play, setPlay] = useState(true)
const [timer, setTimer] = useState(20) 
const [countdown, setCountdown] = useState(5)
const timerRef = useRef() //keeps track of the context when it updates, keeps track of the same object
const [moves, setMoves] = useState([])
const [rounds, setRounds] = useState(props.rounds)
const [modal, setModal] = useState(true)
console.log(props, 'move carousel props')


const circuitContext = useContext(CircuitContext)
const videoRef = useRef()



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
        setTimer(props.time)
        clearInterval(timerRef.current)
        if(rounds !== 0){
            if(videoRef.current){
                videoRef.current.play()
            }
            timerRef.current = setInterval(()=> {
                setTimer(t=> t-1)
            }, 1000)
        }
    }
}, [countdown])



useEffect(()=> {
    if(timer === 0){
        clearInterval(timerRef.current)
        setRounds(r=> r-1)
        if(rounds !== 0){
            setIndex(moves.length-((rounds-1) * 4))
        }
        videoRef.current.pause()
        setCountdown(5)
        timerRef.current = setInterval(()=> {
            setCountdown(t=> t-1)
        }, 1000)
    }
}, [timer])



useEffect(()=>{
    if(videoRef.current && moves[index].gif){
        videoRef.current.load()
        videoRef.current.play()
    }
}, [index])



const playTimer = ()=> {
    if(!play){
        setPlay(true)
        videoRef.current.play()
        timerRef.current = setInterval(()=> {
            if(timer-1 > 0) {
            setTimer(t=> t-1)
            }else { //stop video display time is up
            } 
        }, 1000)
    } else {
        setPlay(false)
        videoRef.current.pause()
        clearInterval(timerRef.current)
    }
}

const closeModal = () => {
    if(countdown===0){
        setModal(false)
        }
    }
// useEffect(()=> {
//     if(show) setRender(true)
//     }, [show])
//     const onAnimationEnd =()=> {
//         if(!show) setRender(false)
//     }

return (
    <>
    {rounds > 0 ?
    <section>
        <div className="carousel-container">
        <div className="container-fluid content-container">

      
       {/* <ModalContainer> */}
        <div className="countdown">
            <div id="modal">
            {countdown < 4 && countdown > 0 ? <p>{countdown}...</p> : countdown === 0 ? <p className="go" onAnimationEnd={_ => setCountdown(0)}>GO!</p> : null}
            </div>
            </div>
        {/* </ModalContainer> */}
               
            <div className="timer-header">
                <div className="space-1"></div>
                <div className="timer">
                    {timer}
                </div>
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
                    onClick = { () => {
                    if(index <= moves.length - (rounds * 4)) {
                        setIndex(moves.length - (rounds * 4) + 3)
                    } else{
                        setIndex(index-1)
                    }}}></img>

                {/* <ButtonContainer onClick = { () => {
                    if(index <= moves.length - (rounds * 4)) {
                        setIndex(moves.length - (rounds * 4) + 3)
                    } else{
                        setIndex(index-1)
                    }}}>
                        Back</ButtonContainer>  */}
                        
                

                <ButtonContainer className="play-btn" onClick = {() => {playTimer()}}> {play ? 'pause' : 'play'} </ButtonContainer>  
                
                
                <img className="forward-btn" src="https://img.icons8.com/ios-glyphs/40/000000/double-right.png" 
                    onClick = { () => {
                    if(index >= moves.length - (rounds * 4) + 3) {
                        setIndex(moves.length - (rounds * 4))
                    }else{
                        setIndex(index+1)
                    }}}></img>
                {/* <ButtonContainer onClick = { () => {
                    if(index >= moves.length - (rounds * 4) + 3) {
                        setIndex(moves.length - (rounds * 4))
                    }else{
                        setIndex(index+1)
                    }}}>
                        Forward</ButtonContainer> */}
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

const fadeIn=keyframes `
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

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
  animation: 4s ${fadeIn} ease-out;
`

