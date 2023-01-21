import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg  bg-dark'>
            <div className='container-fluid'>
                <Link to="Home"> Home </Link>
                <Link to="About"> About </Link>
                <button className='btn btn-warning'>
                    <Link to="Login"> Login </Link>
                </button>
                <button  className='btn btn-outline-secondary'>
                    <Link to ="Register"> Register </Link>
                </button>
                
            </div>
        </nav>
    </div>
  );
}

export default Header