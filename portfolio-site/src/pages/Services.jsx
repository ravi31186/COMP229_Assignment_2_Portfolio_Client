import './Services.css'
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";

/*
File Name: services.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles displaying services for the portfolio site.
*/
export default function Services() {
    return (
        <>
         <div class="services-page-container">
            <h2>Our Services</h2>
            <div class="image-container">
                <img src={dev1} alt="dev1 Image"></img>
                <img src={dev2} alt="dev2 Image"></img>
                <img src={dev3} alt="dev3 Image"></img>
            </div>
            <h4>Helping to optimize applications for efficiency and integration, and business outcomes</h4>
            <ul>
                <li><b>Application modernization :</b> Unlock the value of your digital business</li>
                <li><b>Application Development :</b> Deliver secure, intelligent applications</li>
                <li><b>Cloud migration :</b> Migrate apps for enhanced agility and user experience</li>
                <li><b>SAP Application Services :</b> Harness the full potential of SAP cloud ERP solutions</li>
                <li><b>Oracle Application Services :</b> Reduce costs and increase agility</li>
            </ul>
        </div>
        </>
    )
}