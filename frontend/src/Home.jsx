import "./Home.css";
import PatientInfo from "./PaitentInfo";
import PatientInputForm from "./PaitentInputForm";
import NavBar from "./Nav";
import NameShow from "./NameShow";
import PatientMedicalHistory from "./Medical";
import PatientSymptoms from "./Symptoms";
import Name2 from "./Name2";
import Name3 from "./Name3";
import Team from "./Team";
import AppointmentForm from "./AppointmentForm";
import FeedbackFromDoctor from "./FeedbackFromDoctor";
import FeedbackForm from "./FeedbackForm";


export default function HomePage() {
    

    return (
        <>
            <NavBar />
            <NameShow/>
                <div className="container">
                    <div className="container1">
                        <PatientInfo />
                    </div>

                    <div className="container2">
                        <PatientInputForm />
                    </div>
                </div>
            <Name3/>
            <PatientMedicalHistory />
            <PatientSymptoms />
            <Name2/>
            <Team/>
            <AppointmentForm/>
            <FeedbackFromDoctor/>
            <FeedbackForm/>
        </>
    );
}