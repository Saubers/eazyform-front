import React from 'react';
import { Container, Nav, Row, Col, Card } from 'react-bootstrap';
import PersonalizedNavbar from './Navbar';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <PersonalizedNavbar />

        <Hero />

      {/* Features Section */}
      <Container className="features-section py-5">
        <h2 className="text-center mb-4">Key Features</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Real-time Data Processing</Card.Title>
                <Card.Text>
                  Analyze your data instantly and get actionable insights to improve your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Customizable Dashboards</Card.Title>
                <Card.Text>
                  Create dynamic and personalized dashboards tailored to your needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>AI Predictions</Card.Title>
                <Card.Text>
                  Harness AI to predict trends and make data-driven decisions faster than ever.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <Container>
          <p>© 2024 AI Data Analytics. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
            <Nav.Link href="#" className="text-white">Terms of Service</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </>
  );
};

export default Home;
