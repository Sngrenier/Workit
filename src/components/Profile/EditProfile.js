import axios from 'axios'
import {useState} from 'react'
import { ButtonContainer } from '../NavButton'


const EditProfile = (props)=> {


const [first_name, setfirst_name] = useState('')
const [last_name, setlast_name] = useState('')
const [birthday, setBirthday] = useState('')



 const handleEdit = (e) => {
     axios.put(`/editprofile`, {e})
 }


    console.log(props, 'props.editing')

    return (

        <div>
            <h1>This is the edit profile being rendered</h1>

        { props.editing ? 
        
            (
                <form>
                <input
                value='first_name'
                onChange={(e)=>handleEdit(e.target.value)}
                />
                 <input
                value='last_name'
                onChange={(e)=>handleEdit(e.target.value)}
                />
                <input
                value='birthday'
                onChange={(e)=>handleEdit(e.target.value)}
                />
             
                <button>Save</button>
                </form>
            )      
            
            : null  
        }

        </div>

     

        )

}

export default EditProfile