import {useState, useEffect} from 'react'
// import {CircuitContext} from '../../context/circuitContext'
import axios from 'axios'
import './MeetInstructors.css'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MeetInstructors = (props)=> {

   const [instructors, setInstructors] = useState([])
//    const [circuit, setCircuit] = useState({})
   
   
//    const circuitContext = useContext(CircuitContext);
   
//    useEffect(()=>{
//        setCircuit(circuitContext.circuit)
//    }, [circuitContext])


    useEffect(()=>{
        axios.get(`/instructors`)
        .then( res => {
            console.log(res.data, 'instructors array')
            setInstructors(res.data)
        })


    }, [])
    


    console.log(instructors, 'instructors')


    return  (
    
        <section>
            <div className='instructors-page-container'>
                <Link to="/landing">
                <img className="close-icon" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                </Link>

            <InstructorWrapper>
            <div className='img-container p-5'>
                {instructors.map((elem, id)=>{
                return (
                <div 
                key={id.instructor_id} 
                className="card py-5">
                    <div className="instructor-img">
                    <img className="inst-img" src={elem.instructor_img} height='100px' width='100px'/>
                    </div>
                    <div className='instructor-subtitle-text'>
                        {elem.first_name} {elem.last_name}
                        </div> 
                    <div className='instructor-info-text'>
                        {elem.instructor_description}</div>
                </div>        
            )})}
            </div>
            </InstructorWrapper>
        </div>
    </section>
  
    )

}

export default MeetInstructors


const InstructorWrapper = styled.div`
.card{
    border-color: transparent;
    border-radius: 15%;
    transition: all 0.5s linear;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-start;
    background-color: transparent;  
    margin-bottom: 10%;
    margin-left: 0 !important;
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        border-radius: 15%;
    }
}
.inst-img{
    border-radius: 50%;
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
    .instructor-subtitle-text{
        font-family: roboto;
            font-weight:900;
            font-size: 1rem;
            color: #65d6ce;
            padding-top: 5%;
            margin:.35%;
    }
    .instructor-title-text{
        font-family: roboto;
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--mainDark);
        margin:.35%;
    }
    .instructor-info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);
        padding:5%;
        text-align: center;

    } 
}

@media screen and (min-width: 200px) and (max-width: 520px) {
    .instructor-subtitle-text{
        font-family: roboto;
            font-weight:900;
            font-size: 1rem;
            color: #65d6ce;
            padding-top: 5%;
            margin:.35%;
    }
    .instructor-title-text{
        font-family: roboto;
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--mainDark);
        margin:.35%;
    }
    .instructor-info-text{
        font-family: roboto;
        font-weight: 400;
        font-size: .8rem;
        color: var(--mainDark);
        padding:5%;
        text-align: center;

    } 
}

`
