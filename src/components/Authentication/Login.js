import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import App from '../../App'
import {AuthContext} from '../../context/AuthContext'


const Login = ()=>{
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMsg, setErrorMsg] = useState('')

const values = useContext(AuthContext)

const closeErrorMessage =()=> {
    setErrorMsg(false)
}



    return (
        <div>This is the login page
         <form>

            <input 
            className='emailInput'
            type='text'
            placeholder='email'
            />

            <input 
             className='passwordInput'
             type='password'
             placeholder='password'
            
            />
            <button
            className='signInBtn'
            >Sign In</button>

        </form>   
        </div>
    )

}
export default Login