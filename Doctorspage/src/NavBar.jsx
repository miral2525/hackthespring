import "./NavBar.css";
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function () {

const [searchname,setserachname] = useState("");

async function setuser(){

    localStorage.setItem("searchname",searchname);
    window.location.reload();

}
   

    return (
        <>
            <nav id="navbar1" class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Doctor</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/HomePage">Home</a>
                            </li>
                            <li class="nav-item btn">


                                <Link to="/" className="nav-links-btn" href="#" style={{}}>
                                    Login
                                </Link>

                            </li>
                            <li class="nav-item dropdown">
                                
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                            setserachname(e.target.value);
                            }} />
                            <button class="btn btn-outline-success" type="button" onClick={setuser}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}