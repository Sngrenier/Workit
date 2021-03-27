import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Circuit = (props) => {
    let title, subtitle, info, mainimg

    if(props.circuit){
        title = props.circuit.title
        mainimg = props.circuit.mainimg
        subtitle = props.circuit.subtitle
        info = props.circuit.info
    }

    return <CircuitWrapper className="container-fluid">

            <div className="card" onClick={()=>props.setCircuit(props.circuit.circuit_id)}>  
                <section className="img-container p-5">
                    <img className="circuit-img" alt={title} src={mainimg} height='auto' width='250px'/>
                    <div className="cir-info">
                        <h4 className="subtitle-text">{subtitle}</h4>
                        <h4 className="title-text">{title}</h4>
                        <h4 className="info-text">{info}</h4>
                    </div>
                </section>
        </div>
   
    </CircuitWrapper>
}

export default Circuit;




//this displays the circuit to read more information 


const CircuitWrapper = styled.div`
.card{
    border-color: transparent;
    border-radius: 15%;
    transition: all 0.5s linear;
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-start;
    margin: auto;
    background-color: transparent;  
    margin-bottom: 5%;

}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        border-radius: 15%;
    }
}
@media screen and (min-width: 520px) and (max-width: 1800px) {
    .img-container{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: flex-start;
        margin: auto;
        background-color: transparent;  
    } 
    .cir-info{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-top: 5%;
        margin-bottom: -15%;
        margin-right: -25%;
    }
    .subtitle-text{
        font-family: roboto;
            font-weight:900;
            font-size: .7rem;
            color: #65d6ce;
            margin:.35%;
    }
    .title-text{
        font-family: roboto;
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--mainDark);
        margin:.35%;
    }
    .info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);
        padding-bottom: 5%;
    } 
}

@media screen and (min-width: 200px) and (max-width: 520px) {
    .img-container{
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: flex-start;
        margin: auto;
        background-color: transparent;  
    } 
    .cir-info{
        width: 60vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        margin-top: 5%;
        margin-bottom: -25%;
    }
    .subtitle-text{
        font-family: roboto;
            font-weight:900;
            font-size: .7rem;
            color: #65d6ce;
            margin:.35%;
    }
    .title-text{
        font-family: roboto;
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--mainDark);
        margin:.35%;
    }
    .info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);

    } 
}


`