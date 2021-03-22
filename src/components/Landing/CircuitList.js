import React, { Component } from 'react'
import {CircuitConsumer} from '../../context/circuitContext'



export default class CircuitList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="full" title="collection" />

                    <div className="row">

                        <CircuitConsumer>
                                {(value) => {
                                    return value.circuits.map((circuitMove) => {
                                        return <Circuit key={circuitMove.id} product={circuitMove}/>
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