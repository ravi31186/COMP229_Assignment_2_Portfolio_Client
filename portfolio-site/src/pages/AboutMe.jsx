import './AboutMe.css'
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api"

/*
File Name: aboutMe.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-25

Description: Handles displaying about me page for the portfolio site.
*/
export default function AboutMe() {

       const [abountMe, setAboutMe] = useState([]);
        
            useEffect(() => {
                (async () => {
                try {
                    const data = await api("/api/aboutMe");
                    setAboutMe(data);
                } catch (e) {
                    console.error("Error fetching services data:", e);
                }
                })();
            }, []);

    return (
        <>
         <div class="about-container">
            <div class="centered">
                <h1>{abountMe.name}</h1>

                <img src={profile} alt="Profile Photo"></img>
                <p>{abountMe.desc}</p>

                <a href={resume} class="resume-link" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>
            </div>
        </div>
        </>
    )
}