import React, { Component } from 'react'
import CircuitList from './CircuitList'
import Circuit from './Circuit'
import NavButton from '../NavButton'



export default class LandingPage extends Component {

  


    render() {
        return (
            <div>
                <h1>WORKit</h1>

                <h3>Circuits</h3>
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
}



//This display/page will route to the circuitList and Circuit components