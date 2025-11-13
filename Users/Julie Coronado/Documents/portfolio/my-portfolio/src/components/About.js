import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import profilePic from '../assets/JZcartoon.png'; // Make sure this path is correct

function About() {
  return (
    // We add the fade-in animation here
    <Card className="border-0 shadow-lg p-4 p-md-5 fade-in-up">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image 
              src={profilePic} 
              roundedCircle 
              fluid 
              className="profile-image"
              alt="Jessa cartoon profile"
            />
          </Col>
          <Col md={8}>
            <h3>Hello, It's Me</h3>
            <h1 className="display-4 fw-bold text-primary-custom">JESSA</h1>
            <h3 className="h3 mb-3">
              And I'm a <span className="multiple-text">Computer Science Student</span>
            </h3>
            <p className="lead">
              Innovative Individual and Passionate in Learning | Bachelor of Science in Computer Science | Proficient in
              HTML, CSS, Java, Python, C++, c# | Eager to Bring Problem-Solving and Critical Thinking Skills to Your Team.
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default About;