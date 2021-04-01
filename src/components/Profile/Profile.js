import {Link} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
// import { useForm } from "react-hook-form"
import axios from 'axios'
import {ButtonContainer} from '../NavButton'
import './Profile.css'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import ProfilePic from '../ProfilePic/ProfilePic'
import {SpotifyContext} from '../../context/SpotifyContext'



const Profile =()=>{
    const [user, setUser] = useState([])
    const [current_weight, setcurrent_weight] = useState('')
    const [goal_weight, setgoal_weight] = useState('')
    const [goal_date, setgoal_date] = useState('')
    const [height, setHeight] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    
    const closeErrorMessage =()=> {
        setErrorMsg(false)
    }
    
    useEffect(()=>{
        axios.get(`/myaccount/`)
        .then((res)=> {
            setUser(res.data)})
        .catch(error=> setErrorMsg(error))
    }, [])


    

    const updateProfile = (formSubmit)=>{
        formSubmit.preventDefault()

        axios.post(`/updateprofile`, {current_weight, goal_weight, goal_date, height})
        .then((res)=> console.log(res.data, 'update profile data'))
        .catch((error)=> console.log(error))
    }

  
    
        return (
                       
                        <section className='profileContainer'>
                        <div className='profile-container'>
                            <div className = "container-fluid">
                                <div className="row header-row">
                
                                <Link to="/landing">
                                <img className="close-icon" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                                </Link>
                                    
                            </div>
                
                            <div className='profile-btns'>
                
                                    <div className="profile-icon">
                                    <ProfilePic />
                                    </div>
                                </div>
                            </div>
                        </div>

                    <ul className='profileBtnContainer'>
                        <ButtonContainer className='profileBtn'> Name: {user.first_name} {user.last_name}</ButtonContainer>
                        <ButtonContainer className='profileBtn'>Email: {user.email}</ButtonContainer>
                        <ButtonContainer className='profileBtn'>Birthday: {moment(user.birthday).format('MM-Do-YYYY')}</ButtonContainer>
                        <ButtonContainer className='profileBtn'>  Membership Id: {user.membership_id}</ButtonContainer>
                    </ul>


                <form
                className='form' 
                onSubmit={updateProfile}> 
            

                <input
                className='profileInputs'
                placeholder='current weight'
                type='text'
                // value={current_weight}
                onChange={(e)=>setcurrent_weight(e.target.value)}
                />
               
                 <input
                className='profileInputs'
                placeholder='goal weight'
                type='text'
                // value={goal_weight}
                onChange={(e)=>setgoal_weight(e.target.value)}
                />
                <input
                className='profileInputs'
                placeholder='goal date'
                type='text'
                // value={goal_date}
                onChange={(e)=>setgoal_date(e.target.value)}
                />
                <input
                className='profileInputs'
                placeholder='height'
                type='text'
                // value={height}
                onChange={(e)=>setHeight(e.target.value)}
                />
             
                    <ButtonContainer 
                    className="editBtn">
                    
                    Save
                    </ButtonContainer>
            
                </form>    
                    </section>
            )
    
        
    
    }
    
    export default Profile


    //<ButtonContainer> Edit<EditProfile toggleEdit={toggleEdit} handleEdit={handleEdit}/></ButtonContainer> 