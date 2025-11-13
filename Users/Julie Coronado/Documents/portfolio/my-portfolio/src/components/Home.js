import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    // A "jumbotron" style landing page
    <div className="text-center bg-light p-5 rounded-3 shadow-lg fade-in-up">
      <h1 className="welcome-heading">
        Welcome<span>!</span>
      </h1>
      <p className="welcome-subheading fs-4">
        I'm Jessa, a Computer Science student and aspiring full-stack developer.
      </p>
      <hr className="my-4" />
      <p className="lead welcome-lead">
        This is my personal portfolio. Feel free to look around!
      </p>
      <Button as={Link} to="/projects" variant="primary" size="lg" className="me-2">
        View My Work
      </Button>
      <Button as={Link} to="/about" variant="outline-secondary" size="lg">
        About Me
      </Button>
    </div>
  );
}

export default Home;