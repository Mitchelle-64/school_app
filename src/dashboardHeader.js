import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function DashboardHeader(props) {
    const navigate = useNavigate(); //can only be called in a function and not a component
    const logout = e => {
        e.preventDefault(); //e = shortform for 'event' 
        navigate('/');
        props.logInStatus.setIsLoggedIn(false);
        console.log(props.logInStatus.setIsLoggedIn);

    }
  return (
    <div>
        <nav className='navbar navbar-expand-lg  bg-dark'>
            <div className='container-fluid'>
                <Link to='Dashboard'> Dashboard </Link>
                <Link to='Posts'> Posts </Link>
                <Link to='To do'> To do </Link>
                <Link To='Logout' onClick={ logout }> Logout </Link>
            </div>
            
        </nav>
    </div>
  )
}

export default DashboardHeader