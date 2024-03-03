import "./NameShow.css" 
import { useEffect,useState } from "react";

export default function NameShow() {

    const [name,setname] = useState("");

    useEffect(()=>{ 

        const nameget = localStorage.getItem("name");
        setname(nameget)



    },[]);



    return (
        <>

            <div class="contain">
                <span>
                    <h1 style={{color: "aliceblue"}}>Hey There,</h1>
                    {/* <h2 style={{opacity: "0.5", color: "aliceblue", textAlign: "center"}}>There,</h2> */}
                </span>

                <br />
                <h1 style={{color: "black"}}> {name}</h1>
            </div>
        </>
    );
}