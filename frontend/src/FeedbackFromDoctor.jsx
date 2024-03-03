import React, { useState } from 'react';
import './FeedbackFromDoctor.css'; // Import the CSS file

export default function FeedbackFromDoctor() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { feedback });
        setFeedback('');
    };

    return (
        <div className="doctor-feedback-container">
            <h1 className="doctor-feedback-title">Feedback from Doctor</h1>
            <form className="doctor-feedback-form" onSubmit={handleSubmit}>
                <label htmlFor="feedback">Feedback:</label>
                <textarea className="doctor-feedback-input" id="feedback" name="feedback" value={feedback} onChange={e => setFeedback(e.target.value)} />
                {/* <button type="submit" className="doctor-feedback-button">Submit</button> */}
            </form>
        </div>
    );
}