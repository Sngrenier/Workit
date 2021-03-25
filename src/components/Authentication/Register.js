import React from 'react'
import {Link} from 'react-router-dom'
// import {AuthContext} from '../../context/AuthContext'
import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {ButtonContainer} from '../NavButton'
import './Register.css'
import PayPalButton from './PayPalButton'
<<<<<<< HEAD
=======

>>>>>>> main


const Register =()=>{
        
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [first_name, setfirst_name] = useState('')
const [birthday, setBirthday] = useState(null)
const [membership_type, setmembership_type] = useState('')
const [membership_price, setmembership_price] = useState(0)
const [last_name, setlast_name] = useState('')
const [errorMsg, setErrorMsg] = useState('')

// const values = useContext(AuthContext)
const {push} = useHistory()


const closeErrorMessage =()=> {
    setErrorMsg(false)
}

const membership = (type, price)=>{
    setmembership_type(type)
    setmembership_price(price)
}

const onSignUp = (formSubmit) => {
    formSubmit.preventDefault()
    // let confirm

    // if(!membership_type){
    //     let confirm = window.confirm('please select a membership plan to continue')
    // }

    axios.post(`/auth/register`, {email, password, first_name, last_name, birthday, membership_type, membership_price})
    .then((res)=> {
        console.log(res.data, 'this is the response back from register')
        push('/landing')
    }).catch(error=> setErrorMsg(error))
} 



console.log(membership_type, membership_price, 'state after onClick')

    return (
        <section>
        <div className="register-container">
            <div className = "container-fluid">
                <div className="row header-row">

                <Link to="/">
                <img className="close-icon" src="https://img.icons8.com/ios-glyphs/30/4a90e2/macos-close.png"/>
                </Link>
                <h3 className="prof-title">Create your account</h3>
                    
            </div>

            <div className="membership-btns">

                    <div className="profile-icon">
                    <img className="profile-pic" 
                    src="https://img.icons8.com/color/100/000000/test-account.png"/>
                     </div>
                    
                    
                    <h4 className="info-msg">Select a membership plan to continue </h4>
                    <ButtonContainer className='month-btn' onClick={()=>membership('monthly', 19.99)}>$19.99/ Monthly</ButtonContainer>
                    <ButtonContainer className='qtr-btn' onClick={()=>membership('quarterly', 83.99)}> $83.99 / Quarterly </ButtonContainer>
                    <h4 className="info-msg">$13.99 / month. Save 30%</h4>
                    <ButtonContainer className='yr-btn' onClick={()=>membership('annual', 119.99)}>$119.99 / Annually</ButtonContainer>
                    <h4 className="info-msg">$9.99 / month. Save 50%, our most popular plan for good reason!</h4>
                    

                {/* <div className="member-info"> */}
<<<<<<< HEAD
                    <PayPalButton/>
=======

                <PayPalButton/>

>>>>>>> main
                    <input
                    className='termsofuse'
                    type='checkbox'
                    /> 
                    <h4 className="info-msg">by continuing you accept our Privacy Policy and Terms of Use</h4>
                    {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
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

               {/* <Link to='/landing'>
                <ButtonContainer 
                className="email-btn"
                onClick = {() => values.register(email, password, first_name, last_name, birthday)}
                >
                Submit
                </ButtonContainer>
                </Link> */}
                    
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Register 