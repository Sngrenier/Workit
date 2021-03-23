import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import { ButtonContainer } from '../NavButton'
import MoveCarousel from './MoveCarousel'

//this selects the circuit for the user to start the workout
//once the Start Workout button is clicked, it renders the MoveCarousel component
const SelectCircuit =()=> {


    

    return (
        <div>
            
            <button className='spotifyBtn'>Pick a playlist</button>
            <h3>what you'll need</h3>
            <h3>what you'll do</h3>

            <ButtonContainer
            className='startWorkout'
            onClick={<MoveCarousel/>}
            >Start Workout  </ButtonContainer>


        </div>
    )



}
export default SelectCircuit
 
