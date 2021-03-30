import React from 'react'
import axios from 'axios'
import './Membership.css'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import PayPalButton from './PayPalButton'

const Membership =()=>{
    const [membership_type, setmembership_type] = useState('')
    const [membership_price, setmembership_price] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')
    

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
     
    
            axios.post(`/auth/membership`, {membership_type, membership_price})
            .then((res)=> {
                console.log(res.data, 'this is the response back from membership')
                push('/register')
            }).catch(error=> setErrorMsg(error))
        } 
        console.log(membership_type, membership_price, 'state after onClick')
    
        return (
            <section>
            <div className="membership-container">
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
                        
    
                   
    
                    <PayPalButton/>
    
                        <input
                        className='termsofuse'
                        type='checkbox'
                        /> 
                        <h4 className="info-msg">by continuing you accept our Privacy Policy and Terms of Use</h4>
                        {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
    
                        
                       
                        <Link to="/register">
                            <ButtonContainer 
                            className="email-btn">
                            Submit
                            </ButtonContainer>
                            </Link>
                   
                        </div>
                    </div>
                </div>
            </section>
        )
    
    }
    
    export default Membership