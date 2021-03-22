import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>
                <Link to='/circuitselection'>
                I'm the Register Component
                </Link>
            </div>
        )
    }
}
