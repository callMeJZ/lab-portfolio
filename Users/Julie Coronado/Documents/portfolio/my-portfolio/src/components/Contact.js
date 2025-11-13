import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <Card className="border-0 shadow-lg p-4 p-md-5 fade-in-up">
      <Card.Body>
        <h2 className="text-center text-primary-custom mb-4 fw-bold">
          Contact Me
        </h2>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <Button 
              href="mailto:jessacoronado.dev@gmail.com" 
              variant="outline-dark" 
              size="lg" 
              className="w-100 d-flex align-items-center justify-content-center p-3 btn-contact"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              jessacoronado.dev@gmail.com
            </Button>
          </Col>
          <Col md={6}>
            <Button 
              href="https://github.com/callMeJZ" 
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark" 
              size="lg" 
              className="w-100 d-flex align-items-center justify-content-center p-3 btn-contact"
            >
              <FontAwesomeIcon icon={faGithub} className="me-3" />
              GitHub Profile
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Contact;