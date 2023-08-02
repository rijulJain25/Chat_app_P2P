import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Toastr } from 'toastr';
import './Chat.css';
import logo from './assets/LOGOPNG.png';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (message === '') {
      return;
    }

    const newMessage = {
      text: message,
    };

    // Display a toast notification to confirm that the message was sent successfully.
    Toastr.success('Message sent!', newMessage);

    setMessages([...messages, newMessage]);
  };

  return (
    <div className='chatt'>
    <section className='chat-sec'>
        <img className='chat-img' src={logo}></img>
      <h1>P2P CHAT APP</h1>
      <Form className= 'form-app' onSubmit={handleSendMessage}>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={handleMessageChange}
            />
          </Col>
          <Col>
            <Button type="submit">Send</Button>
          </Col>
        </Row>
      </Form>
      <ul className='msg-disp'>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
          
        ))}
        {/* <p>hello Firends</p> */}
      </ul>
      </section>
    </div>

  );
};

export default Chat;
