import React from 'react'
import {Link} from 'react-router-dom'
import './CompletedCircuit.css'
import{useEffect, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'


const CompletedCircuit = (props) => {
    // const[index, setIndex] = useState(0)
    const [circuit, setCircuit] = useState({}) 
    // const circuitContext = useContext(CircuitContext);
    
    
    const circuitContext = useContext(CircuitContext);
    
    useEffect(()=>{
        setCircuit(circuitContext.circuit)
    }, [circuitContext])



        return (
            <section>
                <div className="complete-container">
                    <div className="container-fluid">
                        <div>
                            <Link to="/landing">
                            <img className="close-icon" src="https://img.icons8.com/ios-glyphs/24/ffffff/cancel.png"/>
                            </Link>
                        </div>
                       
                    <div className = "congrats-container">
                        <img className="trophy" src="https://img.icons8.com/wired/480/ffffff/trophy.png" alt="trophy" height={375} width={300}/>
                       
                       
                        <h3 className="sub-title-line">You have completed</h3>
                        <div className="cir-title-line">
                        <h5 className="cir-title-line">{circuitContext.individualCircuit.title}!</h5>
                            </div>
                      
                    </div>
                </div>
            </div>
        </section>
        )
    
}
export default CompletedCircuit