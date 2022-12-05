import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  function handleInputChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      setStatusMsg('⚠️ Email is invalid');
      return;
    } else if (!subject || !message) {
      setStatusMsg('⚠️ All fields are required to submit.')
    }
    alert('✔️ Form submitted successfully.');

    setEmail('');
    setSubject('');
    setMessage('');
    setStatusMsg('');
  }

  return (
    <div className="d-flex flex-column col-sm-12 col-lg-6 mx-auto">
      <h4 className="text-center">Contact</h4>
      <div className="box d-flex flex-column align-items-center p-3">
        <InputGroup>
          <Col>
            <p className="text-center">{statusMsg}</p>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Your email"
              className="mb-2"
              value={email}
              name="email"
              onChange={handleInputChange}
            />
            <Form.Label>Subject</Form.Label>
            <Form.Control
              placeholder="Message subject"
              className="mb-2"
              value={subject}
              name="subject"
              onChange={handleInputChange}
            />
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Message"
              value={message}
              name="message"
              onChange={handleInputChange}
            />
            <Row className="justify-content-center">
              <Col sm="auto" className="mt-3 w-auto">
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
              </Col>
            </Row>
          </Col>
        </InputGroup>
      </div>
    </div>
  );
}

export default Contact;
