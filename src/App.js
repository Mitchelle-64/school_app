import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import About from './About';
import Dashboard from './Dashboard';
import { useState } from 'react';


import "bootstrap/dist/css/bootstrap.min.css"
import {  
  Routes, 
  Route,
 } from 'react-router-dom';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return (
      <div >
        {isLoggedIn ? <h1>Display dashboard header </h1> : <Header /> } {/* ? - tenarry operator. replace <h1 with the dashboard header component*/}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="About" element= { <About /> } />
          <Route path="Login" element = { <Login  logInStatus={{isLoggedIn, setIsLoggedIn
          }} />} /> {/* this is suppused to check if we are logged in or not. but this has to be passed to a child component in Login page using props*/} 
          <Route path = "Register" element = { <Register />} />
          <Route path ="Dashboard" element = { <Dashboard />} />
        </Routes>
        
      </div>
    
    
  );
}

export default App;
