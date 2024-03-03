import React, { useState } from 'react';
import "./loginSignup.css";
import Navbar from './Nav';
import axios from 'axios';



function LoginSignupPage() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
  <>
  <Navbar/>
  <div className='container3'> 
    <h2 className='name1'>{showSignup ? 'Signup' : 'Login'}</h2>
    <div>
     
       <hr></hr>
      {showSignup ? (
        <SignupForm />
      ) : (
        <LoginForm />
      )}

      <button className="switch" onClick={toggleForm}>
        {showSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button>
    </div>
    </div>   
</>
  );
}

                                                      //for login page

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginSubmit = async (event) =>{
    event.preventDefault();
    const name = localStorage.getItem("name");
    const pass = localStorage.getItem("password");
    if(username === name && password === pass){
      
      window.location.href = "/home";
    }
    else{
      alert("Invalid Username or Password");
    }

        
  }

  return (
    <form className='form1' >
      <br />
      <label  htmlFor="username" for="username">Username:</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <br/>
      
      <label htmlFor="password" for="password" >Password:</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className='login1'  type="button" onClick={handleLoginSubmit}>Login</button>
    </form>
  );
}

                                                      //for signup page
function SignupForm() {
  
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (event) => {
    // event.preventDefault();
    localStorage.setItem("name",username);
   localStorage.setItem("age",age);
   localStorage.setItem("gender",gender);
   localStorage.setItem("password",password);
   window.location.href = "/";
    
  };

  return (
    <form>
      <br /><br />

      <label className="one" htmlFor="age">Age:</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <label className='gender1' htmlFor="gender">Gender:</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select id='gender1' value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <br /><br />

      <label className="one" htmlFor="username">Username:</label>
      &nbsp;
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       
      />

      <br /><br />

      <label className="one" htmlFor="password">Password:</label>
      &nbsp;&nbsp;
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button className='signup1' type="button" onClick={handleSignupSubmit}>Signup</button>
    </form>
  );
}

export default LoginSignupPage;
