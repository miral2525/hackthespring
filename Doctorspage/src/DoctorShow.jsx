import "./DoctorShow.css";
import {useState,useEffect } from "react";

export default function DoctorShow() {

    const [name,setname] = useState("");

    useEffect(()=>{


        async function getToPathname(){

            const name = localStorage.getItem("name");
            setname(name);

        }
        getToPathname();



    },[]);


    return (
        <>
            <div class='container'>
                <div class="container_content">
                    <div class="container_content_inner">
                        <div class="title">
                            <h1>Hye There,</h1>
                        </div>
                        <div class="par">
                            <p style={{color:"black", fontSize:"25px"}}>
                               {name}
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="container_outer_img">
                    <div class="img-inner">
                        <img src='https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg' alt="" class="container_img" />
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </>
    );
}