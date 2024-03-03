import React, { useState } from 'react';
import "./AppointmentForm.css";
import image3 from './doctor3.png'

export default function AppointmentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // ... add state variables for other form fields

    // Function to handle form submission (replace with your actual logic)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form data here, e.g., send to server
        console.log('Form submitted:', { name, email });
        // Clear form fields (optional)
        setName('');
        setEmail('');
        // ... clear other form data
    };

    return (
        <section id="appointment-section" data-stellar-background-ratio="3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 image-container">
                        <img src={image3} class="img-responsive" style={{marginTop:"150px"}} alt="" />
                    </div>
                    <div class="col-md-6 col-sm-6 form-container">
                        <form id="appointment-form" role="form" method="post" action="#">

                            <div class="section-title wow fadeInUp" data-wow-delay="0.4s">
                                <h2>Make an appointment</h2>
                            </div>

                            <div class="wow fadeInUp" data-wow-delay="0.8s">
                                <div class="col-md-6 col-sm-6">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" />
                                </div>

                                <div class="col-md-6 col-sm-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" />
                                </div>

                                <div class="col-md-6 col-sm-6">
                                    <label for="date">Select Date</label>
                                    <input type="date" name="date" value="" class="form-control" />
                                </div>

                                <div class="col-md-6 col-sm-6">
                                    <label for="select">Select Department</label>
                                    <select class="form-control">
                                        <option>General Health</option>
                                        <option>Cardiology</option>
                                        <option>Dental</option>
                                        <option>Medical Research</option>
                                    </select>
                                </div>

                                <div class="col-md-12 col-sm-12">
                                    <label for="telephone">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone" />
                                </div>
                            </div>
                            <button type="submit" class="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}