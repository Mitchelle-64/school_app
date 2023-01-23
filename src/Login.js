import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Login.css"



function Login(props) { //pass props as an attribute to recieve data from app.js check if logged in. pass props in 
    const navigate = useNavigate(); //can only be called in a function and not a component
    const login = e => {
        e.preventDefault(); //e = shortform for 'event' 
        navigate('/Dashboard');
        props.logInStatus.setIsLoggedIn(true); /*sets the value of isLoggedIn to true when the event is triggered. in this case 
        in this case the event is clicking login
        */
        console.log(props.logInStatus.setIsLoggedIn);
    }

  return (
    <div id='login'>
        <h1 id='heading'> 
            Login Here 
        </h1>
        <form id='form' onSubmit={login}>
            <label id='name'>
                Name:
                <input type="text" name='name'/>
            </label>
            <br />
            <label id='email'>
                Email:
                <input type="email" name="email" id='email' />
            </label>
            <br />
            <button className='button' id='button' type="submit"> Login </button>
            
        </form>

    </div>
  )
}

export default Login
