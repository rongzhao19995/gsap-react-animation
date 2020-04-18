import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import * as emailjs from "emailjs-com";

const contactUsPage = () => {

  let messageDisplay;
  const [show, setShow] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [field, setFieldsObj] = useState({
    name: "",
    occupation: "",
    email: "",
    contact: "",
    message: "",
  });

  const submit = (event) => {
    event.preventDefault();
    console.log(field);

    if (!submitStatus) {
      const templateId = "template_HWPpicQU";
      const messageSection = `<p>Name : ${field.name} work as : ${field.occupation} email : ${field.email} contact number : ${field.contact} <br> ${field.message}</p>`;
  
      sendFeedback(templateId, {
        message_html: messageSection,
        from_name: field.name,
        reply_to: "abc.noreplay@gmail.com",
        to_name: "Lee Rong Zhao",
      });
    
    } else {
      handleShow();
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldsObj((field) => ({
      ...field,
      [name]: value,
    }));
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables, "user_ehbxnwHzMsP3TT8vdpWKC")
      .then((res) => {
        console.log("Email successfully sent!");
        setSubmitStatus(true);
        handleShow();
      })

      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  useEffect(() => {
  },[]);

  return (
    <section id="sec6">
      <div className="contact-us-section">
        <Container>
          <Modal show={show} onHide={handleClose} className="contact-modal">
            <Modal.Header closeButton>
              <Modal.Title>Glad u find us</Modal.Title>
            </Modal.Header>
            <Modal.Body className="contact-modal-body">
            {submitStatus ? 'Thanks you for contacting us!' : 'Thanks you but u submmited twice!'}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}  className="btn-primary">
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Row className="contact-us-form">
            <div className="ctt-header">
              Register Your Interest
            </div>
            <Form className="custom-message-form" onSubmit={submit}>
              <Form.Row className="input-fields-wrapper">
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      as="input"
                      type="name"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Form.Group controlId="formOccupation">
                    <Form.Control
                      as="select"
                      name="occupation"
                      placeholder="Occupation"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Occupation</option>
                      <option>Front End Developer</option>
                      <option>Back End Developer</option>
                      <option>Full Stack Developer</option>
                      <option>UI Designer</option>
                      <option>Database Engineer</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Form.Group controlId="formContactNo">
                    <Form.Control
                      type="input"
                      name="contact"
                      placeholder="Contact No"
                      required
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows="3"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="msg-btn-wrapper">
                <Button type="submit">Submit Message</Button>
              </Form.Row>
            </Form>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default contactUsPage;
