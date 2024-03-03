import React, { useState } from 'react';
import axios from 'axios';
import './DoctorsFeedback.css'; // Import the CSS file

export default function DoctorsFeedback() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`http://127.0.0.1:8000/submit_feedback`, { feedback });
            console.log(res.data);
            setFeedback('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="feedback-container">
            <h1 id="feedback-title">Doctor's Feedback</h1>
            <form id="feedback-form" onSubmit={handleSubmit}>
                <label htmlFor="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" value={feedback} onChange={e => setFeedback(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}