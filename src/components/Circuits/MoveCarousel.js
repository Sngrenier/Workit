import {useState} from 'react'
import {useRef} from 'react'
import { ButtonContainer } from '../NavButton'


const MoveCarousel = (props)=>{

const [play, setPlay] = useState(false)
const [timer, setTimer] = useState([7, 1, 7]) //minutes for each timer
const timerRef = useRef()





    // const timer = ()=> {
    //     if(play){

    //         timerRef.current = setInterval(()=> {
    //             if(timer[0]-1 <=0){
    //                 setTimer(t=> t.slice(1))
    //             }
    //         })
    //     }
    

    // }

    return (
        <div>
        <div className='timerContainer'>
         <p>Exercise </p>   

        </div>  
        <ButtonContainer>Back</ButtonContainer> 
        {/* <ButtonContainer onClick={()=> timer()}>{play ? 'pause' : 'play'}</ButtonContainer>   */}
        <ButtonContainer>Forward</ButtonContainer>
        </div>
    )




}
export default MoveCarousel