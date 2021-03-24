import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Circuit = (props) => {
    let title, subtitle, info, mainimg

    //If statement fixes the render problems (rendering the circuit before the props, not sure why - but this fixes that)
    if(props.circuit){
        console.log(props, "props")
        title = props.circuit.title
        mainimg = props.circuit.mainimg
        subtitle = props.circuit.subtitle
        info = props.circuit.info
    }


    return <CircuitWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
       
        <div className="card" onClick={()=>props.setCircuit(props.circuit.circuit_id)}>

            <section className="img-container p-5">
                <img alt={title} src={mainimg} />
            </section>
        </div>
    </CircuitWrapper>
}

export default Circuit;




//this displays the circuit to read more information 


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