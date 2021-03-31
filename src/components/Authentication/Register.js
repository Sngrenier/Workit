import React from 'react'
import axios from 'axios'
import {useContext, useState} from 'react'
import ProfilePic from '../ProfilePic/ProfilePic'
import {Link, useHistory} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import PayPalButton from './PayPalButton'
import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import FormFile from 'react-bootstrap/FormFile'
// import FormCheck from 'react-bootstrap/FormCheck'
import './Register.css'


const Register =()=>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [first_name, setfirst_name] = useState('')
const [birthday, setBirthday] = useState(null)
const [membership_type, setmembership_type] = useState('')
const [membership_price, setmembership_price] = useState(0)
const [last_name, setlast_name] = useState('')
const [errorMsg, setErrorMsg] = useState('')
const [profile_pic, setprofile_pic] = useState(null)
// const [validated, setValidated] = useState(false);

const {push} = useHistory()




const closeErrorMessage =()=> {
    setErrorMsg(false)
}

const membership = (type, price)=>{
    setmembership_type(type)
    setmembership_price(price)
}

    
// const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
  
//     setValidated(true);
// }

const onSignUp = (formSubmit) => {
    formSubmit.preventDefault()
    
        axios.post(`/auth/register`, {email, password, first_name, last_name, birthday, profile_pic, membership_type, membership_price})
        .then((res)=> {
            console.log(res.data, 'this is the response back from register')
            push('/landing')
        }).catch(error=> setErrorMsg(error.response.data))
    } 
    console.log(membership_type, membership_price, 'state after onClick')

    return (
        <section>
        <div className="register-container">
            <div className = "container-fluid reg-container">
                <div className="row header-row">

                <Link to="/">
                <img className="close-icon" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                </Link>
                <h3 className="prof-title">Create your account</h3>
  
            </div>

                <div className="profile-icon">
                    <ProfilePic profile_pic={profile_pic} className="profile-pic"/>
                    </div>

            <div className="register-btns">

            <div className="membership-btns">
                    <h4 className="info-msg">Select a membership plan to continue</h4>
                <ButtonContainer className='month-btn' onClick={()=>membership('monthly', 19.99)}>$19.99/ Monthly</ButtonContainer>
                <ButtonContainer className='qtr-btn' onClick={()=>membership('quarterly', 83.99)}> $83.99 / Quarterly</ButtonContainer>
                    <h4 className="info-msg">$13.99 / month. Save 30%</h4>
                <ButtonContainer className='yr-btn' onClick={()=>membership('annual', 119.99)}>$119.99 / Annually</ButtonContainer>
                    <h4 className="info-msg">$9.99 / month. Save 50%, our most popular plan for good reason!</h4>
            
            <div className="pp-tou">
            <PayPalButton/>

            <input
            className='termsofuse'
            type='checkbox'
            /> 
            <h4 className="info-msg">by continuing you accept our Privacy Policy and Terms of Use</h4>
            {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}></span></h3>}
                </div>    
            </div>
            </div>

            <form
                    className='reg-form'
                    onSubmit={onSignUp}>

                        <input 
                        className='emailInput inputs'
                        type='text'
                        placeholder='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                        <input 
                        className='passwordInput inputs'
                        type='password'
                        placeholder='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                        <input
                        className='first_nameInput inputs'
                        type='text'
                        placeholder='First Name'
                        onChange={(e)=>setfirst_name(e.target.value)}
                        />

                        <input
                        className='last_nameInput inputs'
                        type='text'
                        placeholder='Last Name'
                        onChange={(e)=>setlast_name(e.target.value)}
                        />

                        <input
                        className='birthdayInput inputs'
                        type='date'
                        placeholder='Birthday'
                        onChange={(e)=>setBirthday(e.target.value)}
                        />

                    
                        <ButtonContainer 
                        className="email-btn">
                        Submit
                        </ButtonContainer>
                        
                </form>

                    </div>
                </div>
        </section>
    )
}
export default Register 






{/* <Form noValidate 
validated={validated} 
onSubmit={handleSubmit}
onSubmit={onSignUp} >
{if(validated === true  ?  {onSignUp  :  'Please complete all required fields to register.')}
    <Form.Group controlId="validationCustom01">
        <Form.Label>email</Form.Label>
        <Form.Control 
        required
        type ="email" 
        placeholder="email" />
        <Form.Control.Feedback type="invalid">
        Please complete email.
        </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="validationCustom02">
        <Form.Label>password</Form.Label>
        <Form.Control 
        required
        type ="password" 
        placeholder="password"/>
        <Form.Control.Feedback type="invalid">
        Please include a password.
        </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="validationCustom03">
        <Form.Label>first name</Form.Label>
        <Form.Control 
        required
        type ="text" 
        placeholder="first name"/>
        <Form.Control.Feedback type="invalid" />
    </Form.Group>

    <Form.Group controlId="validationCustom04">
        <Form.Label>last name</Form.Label>
        <Form.Control 
        required
        type ="text" 
        placeholder="last name"/>
        <Form.Control.Feedback type="invalid" />
    </Form.Group>

    <Form.Group controlId="validationCustom05">
        <Form.Label>birthday</Form.Label>
        <Form.Control 
        required
        type ="birthday" 
        placeholder="birthday"/>
        <Form.Control.Feedback type="invalid" />
    </Form.Group>


    <ButtonContainer 
    className="email-btn">
    Submit
    </ButtonContainer>


    </Form> */}