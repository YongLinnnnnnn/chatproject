import React from 'react';
import Button from '@mui/material/Button';

const Login = () => (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                
                <Button variant="text">Sign in</Button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>

)
export default Login;