import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage1 from "./HomePage";
import SignupLogin from "./SignupLogin";

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage1 />} />
        <Route path='/' element={<SignupLogin/>}/>
       

      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
