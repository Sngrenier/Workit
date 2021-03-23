import {Link} from 'react-router-dom'

const Auth = ()=> {

return (
    <div>
        
    <h1>Workit</h1>

    <Link to='/login'>
    <button 
    className='loginBtn'>Login</button></Link>


    Welcome to WORKit!

    <button>Continue with Apple</button>
    
    <button>Continue with Facebook</button>
    

        <Link to='/register'>
        <button>Register with email</button> 
        </Link>

    </div>
)
}

export default Auth