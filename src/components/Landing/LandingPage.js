import React, { Component, useEffect, useState} from 'react'
import CircuitList from './CircuitList'
import Circuit from './Circuit'
import NavButton, { ButtonContainer } from '../NavButton'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'



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
        <div>
            <h1>WORKit</h1>
            <h2> Welcome {user.first_name}!</h2>
           
            <Link to='/'><ButtonContainer onClick={logout}>Logout</ButtonContainer></Link> 
            <Link to='/profile'><ButtonContainer>Profile</ButtonContainer></Link> 
            <section className='circuitListCard'>
            
            <CircuitList/>
            <Circuit/>
    
            </section>
    
            <footer className='navBar'>
            Workouts
            Planner
            progress
            food
            </footer>
      
        
        </div>
    )
    
}
export default LandingPage



//This display/page will route to the circuitList and Circuit components