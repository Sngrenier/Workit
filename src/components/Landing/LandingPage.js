import React, { Component } from 'react'
import CircuitList from './CircuitList'
import Circuit from './Circuit'
import NavButton, { ButtonContainer } from '../NavButton'
import axios from 'axios'


const LandingPage=()=>{

const logout=()=>{
    axios.post(``)
}

    return (
        <div>
            <h1>WORKit</h1>
    
            <h3>Circuits</h3>
            <ButtonContainer >Logout</ButtonContainer>
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