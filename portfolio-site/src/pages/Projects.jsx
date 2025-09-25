import './Projects.css'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api"

/*
File Name: projects.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-25

Description: Handles displaying projects for the portfolio site.
*/
export default function Projects() {
   const [projects, setProjects] = useState([]);
        
    useEffect(() => {
        (async () => {
        try {
            const data = await api("/api/projects");
            setProjects(data);
        } catch (e) {
            console.error("Error fetching services data:", e);
        }
        })();
    }, []);
    
    const projectsArray = projects?.projects ?? [];
    const images = [project1, project2, project3];

    return (
        <>
            <div class="projects-container">
                <div class="header-text">
                    <h2>{projects.header}</h2>
                </div>
                
                {/* ======= Projects ======= */}
                {projectsArray.map(({name, desc}, index) => (
                    <div class="card-row">
                    <img src={images[index]} alt={`project${index + 1} Image`}></img>
                    <div class="card-description">
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                </div>

                ))}
            </div>
        </>
    )
}