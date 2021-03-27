import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './CompletedCircuit.css'

const CompletedCircuit = () => {
   
        return (
            <section>
                <div className="complete-container">
                    <div className="container-fluid">
                        <div>
                            <Link to="/landing">
                            <img className="close-icon" src="https://img.icons8.com/ios-glyphs/24/ffffff/cancel.png"/>
                            </Link>
                        </div>
                       
                            {/* <img className="glitter" src="https://media4.giphy.com/media/1lC9IBNi0sZE7qqkNY/giphy.gif" alt="glitter"></img> */}
                    <div className = "congrats-container">
                        <img className="trophy" src="https://img.icons8.com/wired/480/ffffff/trophy.png" alt="trophy" height={375} width={300}/>
                        {/* <img className="trophy" src="https://img.icons8.com/fluent/480/ffffff/trophy.png" alt="trophy" height={375} width={300}></img> */}
                        <h3 className="sub-title-line">You have completed</h3>
                        <h1 className="cir-title-line">ABS!</h1>
                    </div>
                </div>
            </div>
        </section>
        )
    
}
export default CompletedCircuit