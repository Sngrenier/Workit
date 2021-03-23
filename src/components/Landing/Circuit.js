import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {CircuitConsumer} from '../../context/circuitContext'
import PropTypes from 'prop-types'


//this displays the circuit to read more information 

export default class Circuit extends Component {
    render() {
        const {moves_id, title} = this.props.circuits
        console.log(this.props)
        return (
            <CircuitWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div>
                <div className="card">
                    <CircuitConsumer>
                        {(value) => (
                        <div className="img-container p-5" onClick={()=> value.handleDetail(moves_id)}>
                    <Link to="/details">
                        <img src="https://media.restorationhardware.com/is/image/rhis/CO19SHF_p004x005_FF399?$l-pd1$&wid=650" alt="product" className="card-img-top"
                        />
                    </Link>
                    </div>)}
                    </CircuitConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            Hiya!
                        </p>
                        <h5 className="text-gray font-italic mb-0">
                            <span className="mr-1">Today</span>
                            Info
                        </h5>
                    </div>
                    </div>

                 

                </div>
            </CircuitWrapper>
        )
    }
}

// circuit.propTypes = {
//     circuit:PropTypes.shape({
//         id:PropTypes.number,
//         img:PropTypes.string,
//         title:PropTypes.string,
//     }).isRequired
// }



const CircuitWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0.5s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247, 247);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    margin-left: -75px;
    width: 275px;
    height: 325px;
    transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.3);
}
.cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
    transition: all 0.5s linear;
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

`