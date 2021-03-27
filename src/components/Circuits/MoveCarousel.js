import {useState, useContext, useEffect} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import {useRef} from 'react'
import { ButtonContainer } from '../NavButton'
import './MoveCarousel.css'
import {Link, Redirect} from 'react-router-dom'


const MoveCarousel = (props)=>{

const[index, setIndex] = useState(0)
const [play, setPlay] = useState(true)
const [timer, setTimer] = useState(20) 
const [countdown, setCountdown] = useState(5)
const timerRef = useRef() //keeps track of the context when it updates, keeps track of the same object
const [moves, setMoves] = useState([])
const [rounds, setRounds] = useState(props.rounds)
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

    return (
        <>
        {rounds > 0 ?
        <div>
            {countdown < 4 && countdown > 0 ? <p>{countdown}...</p> : countdown === 0 ? <p className="go" onAnimationEnd={_ => setCountdown(-1)}>GO!</p> : null}
        <div className='timerContainer'>
         <p>Exercise </p>   
         {timer}

        </div> 
        
        {moves.length && index < moves.length && <video loop ref={videoRef}><source src={moves[index].gif} type='video/mp4'/></video>}
       
        <ButtonContainer 
        onClick={()=>{if(index <= moves.length - (rounds * 4)) {setIndex(moves.length - (rounds * 4) + 3)}
        else{
            setIndex(index-1)
        } 
        
    }}>Back</ButtonContainer> 
        <ButtonContainer 
        onClick={()=> playTimer()}>{play ? 'pause' : 'play'}</ButtonContainer>  
        <ButtonContainer
        onClick={()=>{if(index >= moves.length - (rounds * 4) + 3) {setIndex(moves.length - (rounds * 4))}
                    else{
                        setIndex(index+1)
        }}}>
        
        Forward</ButtonContainer>
        </div>

          : <div> 
              <Redirect to='/CompletedCircuit'>
              </Redirect> You've completed the Circuit!!</div>  }
        </>
    )

}
export default MoveCarousel