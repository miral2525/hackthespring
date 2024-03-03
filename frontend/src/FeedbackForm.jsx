import React, { useState } from 'react';
import './FeedbackForm.css'; // Import the CSS file

export default function FeedbackForm() {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { name, feedback });
        setName('');
        setFeedback('');
    };

    return (
        <section id="feedback-section" data-stellar-background-ratio="3">
            <div class="feedback-container">
                <div class="feedback-row">
                    <div class="feedback-form-container">
                        <form id="feedback-form" role="form" method="post" action="#" onSubmit={handleSubmit}>

                            <div class="feedback-section-title">
                                <h2>Give us your feedback</h2>
                            </div>

                            <div class="feedback-input-group">
                                <label for="name">Name</label>
                                <input type="text" class="feedback-form-control" id="name" name="name" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />

                                <label for="feedback">Feedback</label>
                                <textarea class="feedback-form-control" id="feedback" name="feedback" placeholder="Your feedback" value={feedback} onChange={e => setFeedback(e.target.value)} />
                            </div>

                            <button type="submit" class="feedback-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}