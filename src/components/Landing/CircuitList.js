import React, { Component } from 'react'
import {CircuitConsumer} from '../../context/circuitContext'
import Circuit from './Circuit'



export default class CircuitList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">

                        <CircuitConsumer>
                                {(value) => {
                                    return value.circuits.map((circuitMove) => {
                                        return <Circuit key={circuitMove.id} circuit={circuitMove}/>
                                    })
                                }}
                            </CircuitConsumer>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
        )
    }
}