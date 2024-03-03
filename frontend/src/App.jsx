import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import { useState } from 'react';
import LoginSignupPage from './LoginSignUpPage'; 
import Team from './teamDoc1';
import Landingpage from './Landingpage';



function App() {
  

  

      return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='/login' element={<LoginSignupPage/>}/>
        {/* <Route path='/' element={<Team/>}/> */}
        <Route path='/' element={<Landingpage />}/>


      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
