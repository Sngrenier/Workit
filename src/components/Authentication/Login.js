import axios from 'axios'
import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import App from '../../App'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import './Login.css'


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
        push('/spotify')
    })
}

    return (
        <section>
        <div className="login-container">
            <div className="container-fluid">
         <form className="login">

            <input 
            className='emailInput input-btn'
            type='text'
            placeholder='email'
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input 
             className='passwordInput input-btn'
             type='password'
             placeholder='password'
             onChange={(e)=>setPassword(e.target.value)}

            
            />

            <Link to="/spotify">
            <ButtonContainer
            className='signin-btn'
            onClick={(e)=>handleLogin(e)}
            >Sign In</ButtonContainer>
            </Link>
        </form>   
        </div>
        </div>
        </section>
    )

}
export default Login