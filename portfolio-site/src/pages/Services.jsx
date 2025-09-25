import './Services.css'
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api"

/*
File Name: services.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-25

Description: Handles displaying services for the portfolio site.
*/
export default function Services() {

    const [services, setServices] = useState([]);
        
        useEffect(() => {
            (async () => {
            try {
                const data = await api("/api/services");
                setServices(data);
            } catch (e) {
                console.error("Error fetching services data:", e);
            }
            })();
        }, []);
    
    const servicesArray = services?.services ?? [];

    return (
        <>
         <div class="services-page-container">
            <h2>{services.header}</h2>
            <div class="image-container">
                <img src={dev1} alt="dev1 Image"></img>
                <img src={dev2} alt="dev2 Image"></img>
                <img src={dev3} alt="dev3 Image"></img>
            </div>
            <h4>{services.header}</h4>
            <ul>
                {servicesArray.map(({ title, desc }) => {
                    <li><b>{title} :</b> {desc}</li>
                })};
            </ul>
        </div>
        </>
    )
}