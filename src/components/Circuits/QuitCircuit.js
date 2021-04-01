import React from 'react'
import {Link} from 'react-router-dom'
import './QuitCircuit.css'
import Alert from 'react-bootstrap/Alert'
import { ButtonContainer } from '../NavButton'
import {useContext, useState} from 'react'
import axios from 'axios'
// import {SpotifyContext} from '../../context/SpotifyContext'

const QuitCircuit = () => {
    const [show, setShow] = useState(false);
    const [quit_reason, setquit_reason] = useState('')

    // const feedbackClick = () => {
    //    let confirm = window.confirm("Thank you for your feedback!")
    //     } 

    // setShow(true)  

const quitReason = (quit_reason) =>{
 setShow(true)  
axios.post(`/quitreasons`, quit_reason)
.then(res=>{
    console.log(res.data)
}).catch(err=> console.log(err))

}    

        return (
            <>
            <section>    
                <div className="quit-container">
                    <div className="container-fluid quit-content">

                        <div className="resume-container">
                        <h4 className="q-1">You're doing AMAZING!</h4>
                        <h4 className="q-2">Are you sure you want to quit todays circuit?</h4>
                        <div className="resume-btn">
                    <Link to={`/movecarousel`}>
                        <ButtonContainer className="resume">
                            Resume workout
                            <img className="closing-btn" src="https://img.icons8.com/plumpy/30/4a90e2/resume-button.png"/>
                        </ButtonContainer>
                    </Link>
                        </div>
                        </div>
                        
                    
                     <div className="question">
                         <h4>Why weren't you able to complete the workout today?</h4>
                     </div>
                    
                    <div className="reason-btns">
                    <ButtonContainer className="why-btn"
                                     onClick={()=>setquit_reason('Too hard')}   
                    >Too hard</ButtonContainer>

                    <ButtonContainer className="why-btn"
                                     onClick={()=>setquit_reason('Too easy')}  
                    >Too easy</ButtonContainer>


                    <ButtonContainer className="why-btn"
                                     onClick={()=>setquit_reason('Didn\'t like it')}  
                    
                    >Didn't like it</ButtonContainer>


                    <ButtonContainer className="why-btn"
                                     onClick={()=>setquit_reason('Ran out of time')}  
                    >Ran out of time</ButtonContainer>
                    </div>

                    
                    <div className="feedback">
                    <Alert show={show} variant="success" className="feedback-modal">
                        <Alert.Heading>Thank you for your feedback</Alert.Heading>
                        <p>
                        It's great to hear from you! We love feedback so we can accomodate all skill levels and busy schedules. 
                        </p>
                        <hr />
                        <div className="fb-modal">
                            <Link to="/landing">
                        <ButtonContainer className="close-alert-btn" onClick={() => setShow(false)} variant="outline-success">
                            close
                        </ButtonContainer>
                            </Link>
                        </div>
                    </Alert>  
                    {!show && <ButtonContainer className="feedback-btn" onClick={quitReason}>PROVIDE US FEEDBACK</ButtonContainer>}

                        {/* <Link to="/landing">
                    <ButtonContainer 
                    className="feedback-btn" 
                    onclick={()=> setShow(true)}>PROVIDE US FEEDBACK</ButtonContainer>  
                        </Link> */}
                    </div>


                    </div>
                </div>
            </section>
            </>
        )
    }
export default QuitCircuit