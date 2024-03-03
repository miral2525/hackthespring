import "./Team.css";
import image1 from './doctor1.png'
import image2 from './doctor2.png'
import image3 from './doctor3.png'
import image4 from './doctor4.png'
import teamDoc1 from './teamDoc1.jsx';

export default function Team() {
    const url1 = teamDoc1;
    const url2 = "/frontend/src/teamDoc2.html";
    const url3 = "/frontend/src/teamDoc3.html";
    const url4 = "/frontend/src/teamDoc4.html";
    const text = "SEE MORE ...";
    return (
        <>
            <p className="teamtitle">OUR TEAM<hr></hr></p>
            <div className="one1">
                <div className="doctors">
                    DR. JANAK PATEL
                    <img src={image1} alt="image descripition" style={{ width: "170px", height: "220px", marginTop: "5px" }} />
                    <a href={url1}>{text}</a>
                </div>

                <div className="doctors">
                    DR. UMANG PATEL
                    <img src={image2} alt="image cannot be shown" style={{ width: "170px", height: "220px", marginTop: "5px" }} />
                    <a href={url2}>{text}</a>
                </div>

                <div className="doctors">
                    DR. KRISH PARIKH
                    <img src={image3} alt="image cannot be shown" style={{ width: "170px", height: "220px", marginTop: "5px" }} />
                    <a href={url3}>{text}</a>
                </div>

                <div className="doctors">
                    DR. MIRAL PADMANI
                    <img src={image4} alt="image cannot be shown" style={{ width: "170px", height: "220px", marginTop: "5px" }} />
                    <a href={url4}>{text}</a>
                </div>
            </div>
        </>
    );
}