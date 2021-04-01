import React, { Component, useEffect, useState} from 'react'
import CircuitList from './CircuitList'
import Circuit from './Circuit'
import NavButton, { ButtonContainer } from '../NavButton'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './landingpage.css'
import ProfilePic from '../ProfilePic/ProfilePic'



const LandingPage=()=>{
    const [user, setUser] = useState([])
    const {push} = useHistory()


 useEffect(()=>{
  axios.get(`/myaccount`)  
  .then((res)=>{
      console.log(res.data, 'user data from req.session.user')
      setUser(res.data)
      
  }) 
 },[])   

const logout=()=>{
    axios.post(`/logout`)
    .then((res)=> {
        
       
    })
}

console.log(user, 'this is user array on the landing page')

    return (
        <section>
        <div className="landing-container">
            <div className="container-fluid">
                
                <div className="row heading-row">
                    
                    <div className="brand-name">
                        <h1 className="brand">WORKit</h1>
                    </div>
                    <div className="profile-info">             
                        <ProfilePic className="profile-icon">{user.profile_pic}</ProfilePic>
                        {/* <img className="profile-icon" 
                        src="https://img.icons8.com/color/100/000000/test-account.png"/> */}
                        <h4 className="greeting-msg"> Welcome {user.first_name}!</h4>
                    </div>
                </div>
            <div className="nav-btns">
            <Link to='/profile'><ButtonContainer className="nav-btn">Profile</ButtonContainer></Link> 
            <Link to='/instructors'><ButtonContainer className="nav-btn">Meet The Trainers</ButtonContainer></Link>
            <Link to='/'><ButtonContainer className="nav-btn" onClick={logout}>Logout</ButtonContainer></Link> 
            </div>
            <div className='circuit-list'>
            <CircuitList/>
            <Circuit/>
            </div>
    




            <footer className="nav-info">
                <div className="nav-cols">
                    <img className="cir-icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/weight-1.png"/>
                    <h4 className="cir-tab">Workouts</h4>
                </div>
                <div className="nav-cols">
                    <img className="cir-icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/calendar.png"/>
                    <h4 className="cir-tab">Planner</h4>
                </div>
                <div className="nav-cols">
                    <img className="cir-icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/trophy.png"/>
                    <h4 className="cir-tab">progress</h4>
                </div>
                <div className="nav-cols">
                    <img className="cir-icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/restaurant.png"/>
                    <h4 className="cir-tab">food</h4>
                </div>
            </footer>
      </div>
        </div>
        </section>
    )
    
}
export default LandingPage



//This display/page will route to the circuitList and Circuit components