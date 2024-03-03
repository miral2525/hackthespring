import React, { useEffect, useState } from 'react';
import "./ComponentGpt.css";
import axios from 'axios';
// Placeholder function to simulate Q&A model (replace with your actual implementation)
function getResponse(question) {
  const responses = [
    "I'm still under development, but I'm learning to answer your questions!",
    "I'm unable to answer that question at this time, but I'm constantly learning.",
    "Feel free to ask me anything about React JS, CSS, web development, or general topics."
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function ComponentGpt() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
   const res = await axios.post(`http://127.0.0.1:8000/send_text?text=${question}`);
   console.log(res.data.response.message);
   setAnswer(res.data.response.message);
   
  };
  

  return (
    <div className="chatbox">
      <div className="chat-history">
        {/* Display chat history here if needed */}
      </div>
      <h1 id="chatwithme">Chat with GPT!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask me a question..."
        />
        <button type="button" onClick={handleSubmit}>Ask</button>
      </form>
      <div className="chat-answer">
      <textarea name="answer" id="answer"  value={answer} readOnly />
      </div>
    </div>
  );
}

export default ComponentGpt;


 