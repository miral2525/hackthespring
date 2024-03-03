import React, { useState, useEffect } from 'react';
import './PaitentInfo.css'; 

function PatientInfo() {
  const [name,setname] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");

  useEffect(() => {
    const nameget = localStorage.getItem("name");
        setname(nameget)
    const ageget = localStorage.getItem("age");
    setAge(ageget)
    
    const genderget = localStorage.getItem("gender");
    setGender(genderget)
});

  return (
    <div className="patient-info-container">
      <h3>PATIENT INFO</h3>
      <div className="info-item">
        <label style={{marginTop:"25px"}}>Name:</label> <span style={{color: "black", textAlign: "center", marginTop:"25px"}}>{name}</span>
      </div>
      <div className="info-item">
        <label>Age:</label> <span style={{color: "black", textAlign: "center"}}>{age}</span> 
      </div>
      <div className="info-item">
        <label>Gender:</label> <span style={{color: "black", textAlign: "center"}}>{gender}</span>
      </div>
    </div>
  );
}

export default PatientInfo;
