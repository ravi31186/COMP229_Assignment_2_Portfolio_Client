import './Contact.css'
import { useNavigate } from "react-router-dom";

/*
File Name: contact.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles displaying contact page for the portfolio site.
*/
export default function Contact() {

    const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault();
      navigate("/");
    };

    return (
        <>
        <div class="row contact-page">
            {/* ======= Contact Detail ======= */}
            <div class="col-lg-6 contact-detail-container">
                <h2>Contact Detail</h2>
                <ul>
                    <li>Email: rpatil2@my.centennialcollege.ca</li>
                    <li>Phone: (647)-6430-XXXX</li>
                    <li>Location:  941 Progress Ave, Scarborough, ON M1G 3T8</li>
                </ul>
            </div>

            {/* ======= Contact Form ======= */}
            <div class="col-lg-6 contact-us-form-container">
                <div class="card card-container">
                    <div class="card-body">
                        <h5 class="card-title">Contact us</h5>
                        <form class="form-horizontal">
                            <div class="form-group row">
                                <div class="col-lg-6">
                                    <label for="firstName">First Name</label>
                                    <input placeholder="Enter first name" type="firstName" class="form-control" id="firstName"></input>
                                </div>  
                                <div class="col-lg-6">
                                    <label for="lastName">Last Name</label>
                                <input placeholder="Enter last name" type="lastName" class="form-control" id="lastName"></input>
                                </div>  
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input placeholder="Enter phone number" type="phone" class="form-control" id="phone"></input>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input placeholder="Enter email" type="email" class="form-control" id="email"></input>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <input placeholder="Enter message" type="text" class="form-control" id="message"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}