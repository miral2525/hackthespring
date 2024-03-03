import React, { useState, useEffect } from 'react';
import './Medical.css';
import axios from 'axios';

function PatientMedicalHistory() {

  const [medicalHistory, setMedicalHistory] = useState({
    conditions: [],
    medications: [],
    allergies: [],
    familyHistory: '',
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setMedicalHistory((prevData) => {
      if (name === 'conditions' || name === 'medications' || name === 'allergies') {

        const updatedList = checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value);
        return { ...prevData, [name]: updatedList };
      } else {
        return { ...prevData, [name]: value };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (medicalHistory.conditions.length === 0 && medicalHistory.medications.length === 0 && medicalHistory.allergies.length === 0) {
      alert('Please select at least one condition, medication, or allergy.');
    } else {
      axios.post('http://localhost:3000/addpatientmedicalhistory', {
        Conditions: medicalHistory.conditions.join(', '),
        Medications: medicalHistory.medications.join(', '),
        Allergies: medicalHistory.allergies.join(', '),
        Familyhistory: medicalHistory.familyHistory,
        name: localStorage.getItem('name'),
      });
      alert('Medical history submitted successfully!');
      setMedicalHistory({
        conditions: [],
        medications: [],
        allergies: [],
        familyHistory: '',
      });
    }
    

  };


  return (


    <div className="medical-history-container">
      <h1>PATIENT MEDICAL HISTORY</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <section className="medical-history-section">
          <h2>Conditions</h2>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="condition1"
              name="conditions"
              value="Diabetes"
              onChange={handleChange}
            />
            <label className='one' htmlFor="condition1">Diabetes</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="condition2"
              name="conditions"
              value="Heart Disease"
              onChange={handleChange}
            />
            <label className='one' htmlFor="condition2">Heart Disease</label>
          </div>

        </section>
        <section className="medical-history-section">
          <h2>Medications</h2>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="medication1"
              name="medications"
              value="Aspirin"
              onChange={handleChange}
            />
            <label className='one' htmlFor="medication1">Aspirin</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="medication2"
              name="medications"
              value="Metformin"
              onChange={handleChange}
            />
            <label className='one' htmlFor="medication2">Metformin</label>
          </div>

        </section>
        <section className="medical-history-section">
          <h2>Allergies</h2>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="allergy1"
              name="allergies"
              value="Penicillin"
              onChange={handleChange}
            />
            <label className='one' htmlFor="allergy1">Penicillin</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="allergy2"
              name="allergies"
              value="Peanuts"
              onChange={handleChange}
            />
            <label className='one' htmlFor="allergy2">Peanuts</label>
          </div>

        </section>
        <section className="medical-history-section">
          <h2>Family History</h2>
          <textarea
            name="familyHistory"
            value={medicalHistory.familyHistory}
            onChange={handleChange}
            className="family-history-textarea"
            placeholder="Please provide details of your family history (optional)"
          />
        </section>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>

  );

}

export default PatientMedicalHistory;
