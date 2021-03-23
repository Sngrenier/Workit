import axios from 'axios'
import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import App from '../../App'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'


const Login = ()=>{
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMsg, setErrorMsg] = useState('')

const values = useContext(AuthContext)
const {push} = useHistory()

const closeErrorMessage =()=> {
    setErrorMsg(false)
}

const handleLogin =()=>{
    axios.post(`/auth/login`, {email, password})
    .then((res)=>{
        console.log(res.data)
        push('/landing')
    })
}

    return (
        <div>This is the login page
         <form>

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
            <button
            className='signInBtn'
            onClick={(e)=>handleLogin(e)}
            >Sign In</button>

        </form>   
        </div>
    )

}
export default Login