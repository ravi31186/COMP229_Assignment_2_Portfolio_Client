import './Projects.css'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

/*
File Name: projects.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles displaying projects for the portfolio site.
*/
export default function Projects() {
    return (
        <>
            <div class="projects-container">
                <div class="header-text">
                    <h2>My Projects</h2>
                </div>
                
                {/* ======= Project 1 ======= */}
                <div class="card-row">
                    <img src={project1} alt="project1 Image"></img>
                    <div class="card-description">
                        <h2>Project 1</h2>
                        <p>The app features a visually appealing gift card component implemented using CardView. 
                            Each card displays an image, title, short description, and optional action button. 
                            The card layout is responsive, scrollable for longer text, and styled with elevation and 
                            rounded corners to provide a modern, interactive UX for Android users.</p>
                    </div>
                </div>

                {/* ======= Project 2 ======= */}
                <div class="card-row">
                    <img src={project2} alt="project1 Image"></img>
                    <div class="card-description">
                        <h2>Project 2</h2>
                        <p>Developed a modern Real Estate app front-end featuring interactive property listings using CardView and RecyclerView. 
                            Each property card displays images, title, price, location, and a short description. 
                            Implemented responsive layouts with ConstraintLayout, smooth scrolling, 
                            and click actions for viewing detailed property information. Designed with Material Design principles, including elevation, 
                            rounded corners, and ripple effects for a polished user experience across multiple screen sizes.
                        </p>
                    </div>
                </div>

                {/* ======= Project 3 ======= */}
                 <div class="card-row">
                    <img src={project3} alt="project3 Image"></img>
                    <div class="card-description">
                        <h2>Project 3</h2>
                        <p>Developed a responsive Inventory Management Web Application for TobBeco using Angular, JavaScript, and CSS. 
                            Implemented interactive dashboards to track stock levels, manage product details, and monitor sales. 
                            Designed clean, user-friendly interfaces with cards and tables to display inventory data efficiently. 
                            Integrated sorting, filtering, and search functionalities for quick access to information. 
                            Ensured cross-browser compatibility and responsive design for desktop and tablet users.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}