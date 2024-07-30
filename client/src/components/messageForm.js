import React, { useState } from 'react';
import axios from 'axios';
import '../components/messageForm.css' // Create this CSS file for styling

const MessageForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', { phoneNumber, message });
      setStatus('Message sent!');
      setPhoneNumber('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('Error sending message');
    }
  };

  return (
    <div className="message-form">
      <h2>Send Bulk SMS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default MessageForm;
