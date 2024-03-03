import { useState } from 'react';
import './Symptoms.css';
import axios from "axios";

function PatientSymptoms() {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState('');

  const handleInputChange = (event) => {
    setNewSymptom(event.target.value);
  };

  const addSymptom = () => {
    if (newSymptom.trim()) { 
      setSymptoms([...symptoms, newSymptom.trim()]);
      setNewSymptom('');
    }
  };

  const deleteSymptom = (index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms.splice(index, 1);
    setSymptoms(updatedSymptoms);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (symptoms.length > 0) {
      const patientSymptoms = {
        symptoms: symptoms.join(', '),
        name: localStorage.getItem('name'),
      };
      await axios.post('http://localhost:3000/addpatientsymptoms', patientSymptoms);
      alert('Symptoms submitted successfully!');
      setSymptoms([]);

      
      
     
    } else {
      alert('Please enter at least one symptom.');
    }
  };

  return (
    <div className="symptoms-container">
      <h1>Patient Symptoms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="symptoms">Enter your symptoms:</label>
        <div className="symptom-input-group">
          <input
            type="text"
            id="symptoms"
            name="symptoms"
            value={newSymptom}
            onChange={handleInputChange}
            placeholder="Enter a symptom..."
            required
          />
          &nbsp;&nbsp;
          <button id='one' className='btn btn-white' type="button" onClick={addSymptom}>
            Add Symptom
          </button>
        </div>
        
        <div className="symptoms-box">

          {symptoms.length > 0 ? (
            
            <ul className="symptoms-list">
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  {symptom} &nbsp;&nbsp;&nbsp;
                
                  <i type="button"  onClick={() => deleteSymptom(index)} class="fa-solid fa-xmark"></i>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No symptoms added yet.</p>
          )}
          
        </div>
        <button type="submit" className="submit-button">
          Submit Symptoms
        </button>
      </form>
    </div>
  );
}

export default PatientSymptoms;
