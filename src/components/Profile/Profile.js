import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {ButtonContainer} from '../NavButton'
import './Profile.css'

const Profile =()=>{
        
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
    
    useEffect(()=>{
        axios.get(`/myaccount${email}`, {email, password, first_name, last_name, birthday, membership_type, membership_price})
        .then((res)=> {
            console.log(res.data, 'this is the response back from register')
            push('/landing')
        }).catch(error=> setErrorMsg(error))
    }, [])

    
    const handleEdit = () => {

       
    } 
  
    
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
                        
                        
                   
                      
    
                          
                  
    
                 
                    <ButtonContainer 
                    className="email-btn">
                    Submit
                    </ButtonContainer>
                 
                        
                        </div>
                    </div>
                </div>
            </section>
            )
    
        
    
    }
    
    export default Profile
