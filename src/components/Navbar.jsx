import {
  Container,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import LanguageSelector from "./LanguageSelector";

const PersonalizedNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
      <LanguageSelector />
        <Navbar.Brand href="#home">AI Data Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Button href="/signup" variant="primary" className="ms-3">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PersonalizedNavbar;