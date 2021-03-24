import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {ButtonContainer} from '../NavButton'
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

const values = useContext(AuthContext)
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
                    <div className="row main-row">
                <Link to="/">
                <img className="close-box" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                </Link>
                <h3 className="prof-title">Create your account</h3>
                    </div>

                <div className="container-fluid reg-container">
                <div className="profile-img"><img className="profile-icon" src="https://img.icons8.com/color/100/000000/test-account.png"/>

                </div>
                <div className="membership-btns">
                    Select a membership plan to continue

                    <ButtonContainer
                    className='monthlyPlan'
                    onClick={()=>membership('monthly', 19.99)}>
                    $19.99/ Monthly
                    </ButtonContainer>


                    <ButtonContainer
                    className='quarterlyPlan'
                    onClick={()=>membership('quarterly', 83.99)}> 
                    $83.99 / Quarterly 
                    </ButtonContainer>
                    $13.99 / month. Save 30%


                    <ButtonContainer
                    className='annualPlan'
                    onClick={()=>membership('annual', 119.99)}>
                    $119.99 / Annually
                    </ButtonContainer>

                    $9.99 / month. Save 50%, our most popular plan for good reason!
                    </div>
                    <input
                    className='termsofuse'
                    type='checkbox'
                    /> by continuing you accept our Privacy Policy and Terms of Use

                    <form
                    className='registrationForm'
                    onSubmit={onSignUp}>

                        <input 
                        className='emailInput'
                        type='text'
                        placeholder='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                        <input 
                        className='passwordInput'
                        type='password'
                        placeholder='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                        <input
                        className='first_nameInput'
                        type='text'
                        placeholder='First Name'
                        onChange={(e)=>setfirst_name(e.target.value)}
                        />

                        <input
                        className='last_nameInput'
                        type='text'
                        placeholder='Last Name'
                        onChange={(e)=>setlast_name(e.target.value)}
                        />

                        <input
                        className='birthdayInput'
                        type='text'
                        placeholder='Birthday'
                        onChange={(e)=>setBirthday(e.target.value)}
                        />
                        
                </form>

            {/* <Link to="/landing">
                Go to landing page
            </Link> */}
                </div>
            </div>
            </section>
        )

    

}

export default Register 