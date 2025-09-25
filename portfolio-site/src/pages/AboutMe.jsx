import './AboutMe.css'
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

/*
File Name: aboutMe.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles displaying about me page for the portfolio site.
*/
export default function AboutMe() {

    return (
        <>
         <div class="about-container">
            <div class="centered">
                <h1>Ravindra Patil</h1>

                <img src={profile} alt="Profile Photo"></img>
                <p>I am a dedicated web developer passionate about building responsive and user-friendly web applications. I specialize in React and modern JavaScript, focusing on writing clean, maintainable code.</p>

                <a href={resume} class="resume-link" target="_blank" rel="noopener noreferrer">Download Resume (PDF)</a>
            </div>
        </div>
        </>
    )
}