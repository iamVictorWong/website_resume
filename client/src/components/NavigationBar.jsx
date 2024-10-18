import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap'; // Ensure you import necessary components

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/">My Resume</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav> {/* Make it flex and align horizontally */}
          <LinkContainer to="/">
            <Nav.Link>Overview</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/education">
            <Nav.Link>Education</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/experience">
            <Nav.Link>Experience</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
