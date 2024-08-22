import { Container, Nav, Row, Col } from 'react-bootstrap';
import PersonalizedNavbar from './Navbar/Navbar';
import Hero from './Hero';
import PersonalizedCard from './Card/Card';
import { boneWhite, darkGray, marineBlue } from '../constants/colors';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <PersonalizedNavbar />

      <Hero />

      {/* Features Section */}
      <Container className="features-section py-5" style={{ backgroundColor: boneWhite }}>
        <h2 className="text-center mb-4" style={{ color: marineBlue }}>Key Features</h2>
        <Row>
          <Col md={4}>
            <PersonalizedCard
              title="Real-time Data Processing"
              text="Analyze your data instantly and get actionable insights to improve your business."
              style={{
                backgroundColor: darkGray, // Fondo de la tarjeta
                color: marineBlue, // Texto principal
              }}
            />
          </Col>
          <Col md={4}>
            <PersonalizedCard
              title="Customizable Dashboards"
              text="Create dynamic and personalized dashboards tailored to your needs."
              style={{
                backgroundColor: darkGray,
                color: marineBlue,
              }}
            />
          </Col>
          <Col md={4}>
            <PersonalizedCard
              title="AI Predictions"
              text="Harness AI to predict trends and make data-driven decisions faster than ever."
              style={{
                backgroundColor: darkGray,
                color: marineBlue,
              }}
            />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Home;
