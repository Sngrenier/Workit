import {useState, createContext} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const AuthContext = createContext()
export const AuthProvider = (props) => {

const [user, setUser] = useState(null)
const { push } = useHistory()

const register = (email, password, first_name, last_name, birthday, setErrorMsg)=> {

    axios
    .post('/auth/register', {email, password, first_name, last_name, birthday})
    .then((res)=> {
        setUser(res.data)
        push('/landing')
    })
    .catch((error) => setErrorMsg('email already in use, please use a different email address to register or reset your password'))

}

const login = (email, password, setErrorMsg)=>{
 axios
.post('/auth/login', {email, password})
.then((res)=> {
    setUser(res.data)
    push('/landing')
})
.catch((error)=> setErrorMsg('Please register to log in'))   

}


const logout = () => {
    axios
    .post('/logout')
    .then((_)=> {
        push('/')
    })
}

return(
    <AuthContext.Provider value={{user, setUser, register, login, logout}}>
    {props.children}
    </AuthContext.Provider>

)
}
