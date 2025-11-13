import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; 2025 Jessa. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Button 
              href="mailto:jessacoronado.dev@gmail.com" 
              variant="outline-light" 
              className="me-2"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
            <Button 
              href="https://github.com/callMeJZ" 
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;