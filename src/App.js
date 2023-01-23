import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import About from './About';
import Dashboard from './Dashboard';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import Posts from './Posts';
import ToDo from './ToDo';
import "bootstrap/dist/css/bootstrap.min.css"
import {  
  Routes, 
  Route,
 } from 'react-router-dom';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return (
      <div >
        {isLoggedIn ? <DashboardHeader /> : <Header /> } {/* ? - tenarry operator. replace <h1 with the dashboard header component*/}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/" element = { <DashboardHeader  logInStatus={{isLoggedIn, setIsLoggedIn
          }} />} />
          
          <Route path="About" element= { <About /> } />
          <Route path="Login" element = { <Login  logInStatus={{isLoggedIn, setIsLoggedIn
          }} />} /> {/* this is suppused to check if we are logged in or not. but this has to be passed to a child component in Login page using props*/} 
          
          
          
          <Route path = "Register" element = { <Register />} />
          <Route path ="Dashboard" element = { <Dashboard />} />
          <Route path ="Posts" element = { <Posts /> } />
          <Route path = "ToDo" element = { <ToDo /> } />

        </Routes>
        
      </div>
    
    
  );
}

export default App;
