import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Figma', 'Git',
  'GitHub', 'VS Code', 'Jupyter Notebook', 'Eclipse IDE', 
  'Game Maker Engine', 'Virtual Box', 'Basic Linux'
];

function Skills() {
  return (
    <Card className="border-0 shadow-lg p-4 p-md-5 fade-in-up">
      <Card.Body>
        <h2 className="text-center text-primary-custom mb-4 fw-bold">
          Skills & Tools
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              className="skill-badge"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Skills;