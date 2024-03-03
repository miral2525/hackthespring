import Doctor from "./Doctor";
import NavBar from "./NavBar";
import DoctorShow from "./DoctorShow";
import Dpatient from "./Dpatient";
import ComponentGpt from "./ComponentGpt";
import DoctorsFeedback from "./DoctorsFeedback";


export default function HomePage1(){
    
    return (
    <>
        <NavBar/>
        <Doctor/>
        <DoctorShow/>
        <Dpatient/>
        <ComponentGpt/>
        <DoctorsFeedback/>
       
    </>
    );
}