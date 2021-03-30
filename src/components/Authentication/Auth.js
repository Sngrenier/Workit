import {Link} from 'react-router-dom'
import './Auth.css'
import {ButtonContainer} from '../NavButton'
 
const Auth = ()=> {

return (
    <section>
    <div className = "auth-container">
        <div className="container-fluid">
            <div className="row title-row">

    <h1 className="auth-title">WORKit</h1>
    <Link to='/login'>
    <a
    href=""
    className='login-btn'>Login</a></Link>

    </div>
    

    <div className="auth-btns">
    
    <h3 className="auth-subtitle">Welcome to WORKit!</h3>
    <h4 className="subtitle-msg"> circuit training for every fitness level and even the busiest schedules</h4>
    
    <ButtonContainer 
    className="apple-btn">
    <img className="apple-icon" src="https://img.icons8.com/ios/100/000000/mac-os.png"/>
    sign up with Apple
    </ButtonContainer>

    <ButtonContainer 
    className="fb-btn">
    <img className="fb-icon" src="https://img.icons8.com/ios/64/000000/facebook-circled--v1.png"/>
    sign up with Facebook
    </ButtonContainer>
    
    <Link to='/membership'>
    <ButtonContainer 
    className="email-btn">
    <img className="email-icon" src="https://img.icons8.com/ios/64/000000/email.png"/>
    sign up with Email 
    </ButtonContainer>
    </Link>
    </div>

    </div>
        </div>
    </section>
)
}

export default Auth