import {Link} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {ButtonContainer} from '../NavButton'
import './Profile.css'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import EditProfile from './EditProfile'

const Profile =()=>{
    const [user, setUser] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const [toggleEdit, setToggleEdit] =useState(false)
    
    
    const closeErrorMessage =()=> {
        setErrorMsg(false)
    }
    
    useEffect(()=>{
        axios.get(`/myaccount/`)
        .then((res)=> {
            setUser(res.data)})
        .catch(error=> setErrorMsg(error))
    }, [])


    const handleEdit = () => {
        setToggleEdit(!toggleEdit)

        // if(toggleEdit === true){

        // }
       
    } 

    console.log(user, 'this is the user array')
    console.log(toggleEdit)
  
    
        return (
                       
                        <section className='profileContainer'>
                        <div className="register-container">
                            <div className = "container-fluid">
                                <div className="row header-row">
                
                                <Link to="/landing">
                                <img className="close-icon" src="https://img.icons8.com/ios-glyphs/30/4a90e2/macos-close.png"/>
                                </Link>
                                {/* <h3 className="prof-title">Create your account</h3> */}
                                    
                            </div>
                
                            <div className="membership-btns">
                
                                    <div className="profile-icon">
                                    <img className="profile-pic" 
                                    src="https://img.icons8.com/color/100/000000/test-account.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
         
                   
                   
  
                            
              
                    <ul className='profileBtnContainer'>
                        <ButtonContainer className='profileBtn' onClick={(e)=>handleEdit(e)}> Name: {user.first_name} {user.last_name} <EditProfile/></ButtonContainer> 
                        <ButtonContainer className='profileBtn'>Email: {user.email}</ButtonContainer>
                        <ButtonContainer className='profileBtn'>Birthday: {moment(user.birthday).format('MM-Do-YYYY')}</ButtonContainer>
                        <ButtonContainer className='profileBtn'>  Membership Id:   {user.membership_id}</ButtonContainer>
                    
        
                    </ul>
            
    
        }
                 

                    {/* <ButtonContainer 
                    className="profileBtn">
                    Submit
                    </ButtonContainer> */}
                    </section>
            )
    
        
    
    }
    
    export default Profile
