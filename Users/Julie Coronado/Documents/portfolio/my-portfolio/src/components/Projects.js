import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

// Placeholder project data (from previous step)
const projectData = [
  // ... (your project data) ...
  {
    title: 'DigiKayan Advocacy',
    description: 'An advocacy project promoting digital literacy and responsible online engagement.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=DigiKayan+Project'
  },
  {
    title: 'Pixel Bloom Studios Game',
    description: 'A 2D platformer game being developed in GameMaker.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=Pixel+Bloom+Game'
  },
  {
    title: 'Student Services Business',
    description: 'A planned student-run business offering graphic design and virtual assistance.',
    imgSrc: 'https://via.placeholder.com/400x300.png?text=Polaris+Services'
  }
];

function Projects() {
  return (
    <div className="fade-in-up">
      <h2 className="text-center text-light mb-4 fw-bold welcome-heading">
        My Projects
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectData.map((project, idx) => (
          <Col key={idx} className="d-flex align-items-stretch">
            <Card className="shadow-lg border-0">
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-primary-custom">{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Button variant="primary" className="mt-auto align-self-start">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;