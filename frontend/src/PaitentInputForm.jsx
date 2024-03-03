import React, { useState } from 'react';
import "./PaitentInputForm.css";
import axios from 'axios';


function PatientInputForm() {
  const [bpSystolic, setBpSystolic] = useState('');
  const [bpDiastolic, setBpDiastolic] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'bpSystolic':
        setBpSystolic(value);
        break;
      case 'bpDiastolic':
        setBpDiastolic(value);
        break;
      case 'sugarLevel':
        setSugarLevel(value);
        break;
      case 'temperature':
        setTemperature(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const patientVitals = {
      SystolicBP: bpSystolic,
      DiastolicBP: bpDiastolic,
      BloodSugar: sugarLevel,
      Temperature: temperature,
      name: localStorage.getItem('name'),
    };
    axios.post('http://localhost:3000/addpatientvitals', patientVitals);
    alert("Add patient vitals successfully");
    
    // Submit data to backend or perform further actions
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <div className="form-group">
         <h3>PATIENT VITALS INPUT</h3>
        <label  htmlFor="bpSystolic">Systolic BP (mmHg):</label>
       <div>
        <input 
          type="number"
          id="bpSystolic"
          name="bpSystolic"
          value={bpSystolic}
          onChange={handleInputChange}
          required
          className="form-control"/>
        </div>
      </div>
      
      <div className="form-group">
        <label  htmlFor="bpDiastolic">Diastolic BP (mmHg):</label>
        <input
          type="number"
          id="bpDiastolic"
          name="bpDiastolic"
          value={bpDiastolic}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label  htmlFor="sugarLevel">Blood Sugar (mg/dL):</label>
        <input
          type="number"
          id="sugarLevel"
          name="sugarLevel"
          value={sugarLevel}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label  htmlFor="temperature">Temperature (°C):</label>
        <input
          type="number"
          id="temperature"
          name="temperature"
          value={temperature}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="submit-button1">
        Submit
      </button>
    </form>
  );
}

export default PatientInputForm;
