import React, { useState } from 'react';

const AIChatSupport: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    setChatHistory([...chatHistory, `You: ${message}`]);
    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [...prev, `AI: I'm an AI assistant. How can I help you with your financial planning?`]);
    }, 1000);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <h2>AI Chat Support</h2>
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AIChatSupport;