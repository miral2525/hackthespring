import "./Dpatient.css";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Dpatient() {

  const [serachname,setserachname] = useState(localStorage.getItem("searchname"));

  const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("");
    const[systolicBP,setSystolicBP] = useState(0);
    const [diastolicBP,setDiastolicBP] = useState(0);
    const [bloodSugar,setBloodSugar] = useState(0);
    const [condition,setCondition] = useState("");
    const [allergies,setAllergies] = useState("");
    const [medication,setMedication] = useState("");
    const [familyHistory,setFamilyHistory] = useState("");
    const [patientSymptoms,setPatientSymptoms] = useState("");



    useEffect( ()=>{

      async function getuser(){
        const res = await axios.post("http://localhost:3000/patient",{
            name:serachname,
        });
        const name = res.data[0].name;
        const age = res.data[0].age
        const Gender = res.data[0].gender;

        setName(name);
        setAge(age);
        setGender(Gender);
       
      };
      async function getvitals(){
        const res = await axios.get(`http://localhost:3000/addpatientvitals/${serachname}`);
        const SystolicBP = res.data[0].SystolicBP;
        const DiastolicBP = res.data[0].DiastolicBP;
        const BloodSugar = res.data[0].BloodSugar;

        setDiastolicBP(DiastolicBP);
        setSystolicBP(SystolicBP);
        setBloodSugar(BloodSugar);

      }
      async function gethistory(){
        const res = await axios.get(`http://localhost:3000/addpatientmedicalhistory/${serachname}`);
        const Condition = res.data[0].Conditions;
        const Allergies = res.data[0].Allergies;
        const Medication = res.data[0].Medications;
        const FamilyHistory = res.data[0].Familyhistory;

        setAllergies(Allergies);
        setCondition(Condition);
        setMedication(Medication);
        setFamilyHistory(FamilyHistory);

       

      }
      async function getSymptoms(){

        const res = await axios.get(`http://localhost:3000/addpatientsymptoms/${serachname}`);
        const Symptoms = res.data[0].symptoms;
       
        
        setPatientSymptoms(Symptoms);
      }
      getuser();
      getvitals();
      gethistory();
      getSymptoms();



    },[]);






    return (
        <>
            <div className="patient-info-container1">
                <h2>Patient Information</h2>
                <hr />
                <ul>
                    <li>Name: {name}</li>
                    <li>Age:{age} </li>
                    <li>Gender:{gender} </li>
                    <hr />
                    <h2>Patient Vitals Info</h2>
                    <hr />
                    <li>Systolic BP:{systolicBP} </li>
                    <li>Diastolic BP: {diastolicBP}</li>
                    <li>Blood Sugar:{bloodSugar} </li>
                    <hr />
                    <h2>Patient Medical history</h2>
                    <hr />

                    <li>Condition:{condition}</li>
                    <li>Allergies: {allergies}</li>
                    <li>Medication:{medication} </li>
                    <li>
                        <section className="medical-history-section">
                            <h2>family history</h2>
                            <textarea
                                name="familyHistory"
                                className="family-history-textarea1"
                                value={familyHistory}
                            >
                               

                                </textarea>
                        </section>
                    </li>
                    <li>
                        <hr/>
                    <section className="patient-symptoms-section">
                            <h2>Patient Symptoms</h2>
                            <textarea
                                name="PatientSymptoms"
                                className="patient-symptoms-textarea1"
                                value={patientSymptoms}    
                            />
                        </section>
                        </li>

                </ul>
            </div>
        </>
    );
}