import axios from 'axios'
import React, { Component, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import Circuit from './Circuit'



const CircuitList = () => {
    const circuitContext = useContext(CircuitContext);

    const selectCircuit = (id)=>{
        circuitContext.setMoves(id)

    }

    return <div>
        {circuitContext.circuits.map((el, i) => <Circuit key={i} circuit={el} setCircuit={selectCircuit} />)}
    </div>
}

export default CircuitList;





















