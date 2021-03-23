import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component {


    render() {
        return (
            <div>
                <h1>Create your account</h1>

                <div className='profileImage'>

                </div>
                <button 
                className='addImageBtn'
                >+</button>


                <form className='registrationForm'>
                <input 
                className='emailInput'
                type='text'
                placeholder='email'
                />

                <input 
                className='passwordInput'
                type='text'
                placeholder='password'
                />


                <input 
                className='firstNameInput'
                type='text'
                placeholder='First Name'
                
                />


                <input 
                className='lastNameInput'
                type='text'
                placeholder='Last Name'
                
                />

                <input 
                
                className='birthdayInput'
                type='text'
                placeholder='Birthday'
                />

                Membership Options


                <button>$19.99/ Monthly</button>
                <button> $83.99 / Quarterly </button>
                $13.99 / month. Save 30%
                <button> $119.99 / Annually</button>
                $9.99 / month. Save 50%, our most popular plan for good reason!

                <input
                className='termsofuse'
                type='checkbox'
                /> by continuing you accept our Privacy Policy and Terms of Use

                <button
                className='signUp'
                >
                 Sign Up   
                </button>

                </form>

            <Link to="/landing">
                Go to landing page
            </Link>

            </div>
        )
    }
}
