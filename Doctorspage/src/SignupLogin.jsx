import React, { useState } from 'react';
import "./SignupLogin.css";
import Navbar from './NavBar';



function SignupLogin() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
  <>
  <Navbar/>
  <div className='containerD'> 
    <h2 className='nameD'>{showSignup ? 'Signup' : 'Login'}</h2>
    <div>
     
       <hr></hr>
      {showSignup ? (
        <SignupForm />
      ) : (
        <LoginForm />
      )}

      {/* <button className="switch1" onClick={toggleForm}>
        {showSignup ? 'Switch to Login '  : 'Switch to Signup' }
      </button> */}
     
    </div>
    </div>   
</>
  );
}

                                                      //for login page

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginSubmit = (event) =>{

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if(username==username && password==password){
      window.location.href = "/HomePage";
    }
    
    
  }

  return (
    <form className='formD1' >
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

      <button className='loginD1'  type="button" onClick={handleLoginSubmit}>Login</button>
    </form>
  );
}

                                                      //for signup page
function SignupForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (event) => {
    // event.preventDefault();
    localStorage.setItem("name",name);
   window.location.href = "/home";
   localStorage.setItem("age",age);
   window.location.href = "/home";
   localStorage.setItem("gender",gender);
   window.location.href = "/";
    
  };

  return (
    <form>

      <label className="oneD" htmlFor="name" for="name">Name:</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <label className="oneD" htmlFor="age">Age:</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <label className='genderD' htmlFor="gender">Gender:</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select id='gender1' value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <br /><br />

      <label className="oneD" htmlFor="username">Username:</label>
      &nbsp;
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       
      />

      <br /><br />

      <label className="oneD" htmlFor="password">Password:</label>
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

export default SignupLogin;
