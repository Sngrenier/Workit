import {useState, useContext, useEffect} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import {useRef} from 'react'
import { ButtonContainer } from '../NavButton'


const MoveCarousel = (props)=>{

const[index, setIndex] = useState(0)
const [play, setPlay] = useState(true)
//stacy changes above
const [timer, setTimer] = useState(0) 
const timerRef = useRef() //keeps track of the context when it updates, keeps track of the same object
const [moves, setMoves] = useState([])

console.log(props, 'move carousel props')
const circuitContext = useContext(CircuitContext)
const videoRef = useRef()

useEffect(()=>{
    setTimer(props.time)
    timerRef.current=setInterval(() => {
        setTimer(t=> t-1)
        if(timer -1 === 0){
            //stop video from playing display time is up
        }
    }, 1000);

    /* If we wanted a modal to display countdown:
        let countDown = 3
        const countTimer = setInterval(()=> {
            if (countDown === 0) {
                //start video
                //change play state to start as false
                playTimer()
                clearInterval(countTimer)
            } else {
                countdown--
            }
        }, 1000)
    */

    return (()=>clearInterval(timerRef.current)) //will clean this up if the component unmounts

}, [])

useEffect(()=>{
    setMoves(circuitContext.moves)

}, [circuitContext])

useEffect(()=>{

    if(videoRef.current)
    videoRef.current.load()

}, [index])

    const playTimer = ()=> {
        if(!play){
            //stacy change above and below
            setPlay(true)
            timerRef.current = setInterval(()=> {
                if(timer-1 > 0) {
                setTimer(t=> t-1)
                }else { //stop video display time is up
                } 
            }, 1000)

        } else {
            setPlay(false)
            //stacy change above
            clearInterval(timerRef.current)
        }
    

    }

    return (
        <div>
        <div className='timerContainer'>
         <p>Exercise </p>   
         {timer}

        </div> 
        
        {
           moves.length && <video autoPlay loop ref={videoRef}><source src={moves[index].gif} type='video/mp4'/></video>

        }
       

        <ButtonContainer 
        onClick={()=>{if(index=== 0) {setIndex(moves.length-1)}
                                        else{
                                            setIndex(index-1)
                                        } 
    
        }}>Back</ButtonContainer> 
        <ButtonContainer 
        onClick={()=> playTimer()}>{play ? 'pause' : 'play'}</ButtonContainer>  
        <ButtonContainer
        onClick={()=>{if(index=== moves.length-1) {setIndex(0)}
                    else{
                        setIndex(index+1)
        }}}>
        
        Forward</ButtonContainer>
        </div>
    )




}
export default MoveCarousel