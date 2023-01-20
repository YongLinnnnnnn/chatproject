import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

const Register = () => (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat</span>
            <span className='title'>Sign Up</span>
            <form>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <input
                    style={{ display: "none" }} type="file"
                    id='file'/>
                <label htmlFor="file">
                    <FaceRetouchingNaturalIcon />
                    <span>Pick a profile picture?</span>
                </label>
                <Button
                    variant="text"
                    startIcon={<FavoriteBorderIcon />}>
                    register
                </Button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>

)
export default Register;