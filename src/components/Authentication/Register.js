import React from 'react'
import {Link} from 'react-router-dom'
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
// const [picFileSelected, setPicFileSelected] = useState('')

const {push} = useHistory()


const closeErrorMessage =()=> {
    setErrorMsg(false)
}

const membership = (type, price)=>{
    setmembership_type(type)
    setmembership_price(price)
}

// const picFileSelected = (event) => {
//     state = {
//         selectedFile=null
//     }
//     console.log(event.target.files[0])
// }

// const picUploadHandler = () => {
//     setPicFileSelected(picFileSelected)
// }

const onSignUp = (formSubmit) => {
    formSubmit.preventDefault()
    // let confirm
    
    // if(!membership_type){
    //         let confirm = window.confirm('please select a membership plan to continue')
    //     }

    // const checkEmail = () => {         
    //     var pattern = new RegExp(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/);         
    //     return pattern.test(loginInfo.email);     
    // }    
    //must start with a letter or number containing as many as it wants can also have a - . _ or + but ending with a letter or number before the @ symbol, then will start with a letter or number can have a - or . eventually followed by a . with a letter at the end between 2 to 6 characters in length         
        
    // const checkPassword = () => {        
    //     var reg = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/);         
    //     return reg.test(loginInfo.password);     
    // }
    //must contain at least 1 number, 1 capital letter, 1 lower case letter and one special character         
    

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

            <div className="register-btns">

                    <div className="profile-icon">
                    <img className="profile-pic" 
                    src="https://img.icons8.com/color/100/000000/test-account.png"/>
                    </div>
                    

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