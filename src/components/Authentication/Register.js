import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


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
    })
    .catch(error=> setErrorMsg(error))

}


console.log(membership_type, membership_price, 'state after onClick')

    return (
            <div>
              
                <h1>Create your account</h1>

                <div className='profileImage'>

                </div>
                <button 
                className='addImageBtn'
                >+</button>



                    Select a membership plan to continue


                    <button

                    className='monthlyPlan'
                    onClick={
                    ()=>membership('monthly', 19.99)}>
                    $19.99/ Monthly

                    </button>


                    <button

                    className='quarterlyPlan'
                    onClick={
                    ()=>membership('quarterly', 83.99)}> 
                    $83.99 / Quarterly 

                    </button>
                    $13.99 / month. Save 30%


                    <button
                    className='annualPlan'
                    onClick={()=>membership('annual', 119.99)}>
                    $119.99 / Annually

                    </button>
                    $9.99 / month. Save 50%, our most popular plan for good reason!

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
                        className='firstNameInput'
                        type='text'
                        placeholder='First Name'
                        onChange={(e)=>setfirst_name(e.target.value)}
                        
                        />


                        <input 
                        className='lastNameInput'
                        type='text'
                        placeholder='Last Name'
                        onChange={(e)=>setlast_name(e.target.value)}
                        
                        />

                        <input 
                        
                        className='birthdayInput'
                        type='date'
                        placeholder='Birthday'
                        onChange={(e)=>setBirthday(e.target.value)}
                        />

                    

                        <button
                        className='signUp'
                       
                        >
                        Sign Up   
                        </button>

                    </form>

            </div>
        )

    

}

export default Register 