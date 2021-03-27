import axios from 'axios'
import React, { Component, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import Circuit from './Circuit'
import {useHistory} from 'react-router-dom'




const CircuitList = (props) => {
    const circuitContext = useContext(CircuitContext);
    const {push} = useHistory()

    const selectCircuit = (id)=>{
        circuitContext.setMoves(id)
        push(`/circuitselection/${id}`)
    }

    return <div className='circuitList'>
        {circuitContext.circuits.map((el, i) => <Circuit key={i} circuit={el} setCircuit={selectCircuit}/>)}
    </div>
}

export default CircuitList;




//setMoves={circuitContext.setMoves}
















