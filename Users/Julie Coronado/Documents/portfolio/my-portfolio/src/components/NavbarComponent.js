import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // <-- Import Link

function NavbarComponent() {
  return (
    <Navbar 
      bg="light" 
      variant="light" 
      expand="lg" 
      fixed="top" 
      className="shadow-sm"
    >
      <Container>
        {/* Brand logo now links to Home */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          JESSA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* All links updated to use 'as={Link}' and 'to="..."' */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;