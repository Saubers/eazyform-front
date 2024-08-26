import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'; // Archivo CSS para las animaciones
import PersonalizedCard from '../Card/Card';
import PersonalizedNavbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { darkGray, marineBlue } from '../../constants/colors';
import { useNavigate } from 'react-router-dom'; // Para redirigir al chat
import Footer from '../Footer';

const Home = () => {
  const navigate = useNavigate();

  const navigateToChat = (service) => {
    navigate(`/tool/${service}`);
  };

  return (
    <>
      <PersonalizedNavbar />
      <Hero />

      {/* Features Section */}
      <Container className="features-section py-5 fade-in">
        <h2 className="text-center mb-4 fade-in-down" style={{ color: marineBlue }}>
          Key Features
        </h2>
        <Row>
          <Col md={4} className="fade-in-up">
            <PersonalizedCard
              title="Real-time Data Processing"
              text="Analyze your data instantly and get actionable insights to improve your business."
              style={{
                backgroundColor: darkGray, // Fondo de la tarjeta
                color: marineBlue, // Texto principal
              }}
              onClick={() => navigateToChat('data-analysis')}
            />
          </Col>
          <Col md={4} className="fade-in-up">
            <PersonalizedCard
              title="Customizable Dashboards"
              text="Create dynamic and personalized dashboards tailored to your needs."
              style={{
                backgroundColor: darkGray,
                color: marineBlue,
              }}
              onClick={() => navigateToChat('dashboard-customization')} // Navegar a otro servicio
            />
          </Col>
          <Col md={4} className="fade-in-up">
            <PersonalizedCard
              title="AI Predictions"
              text="Harness AI to predict trends and make data-driven decisions faster than ever."
              style={{
                backgroundColor: darkGray,
                color: marineBlue,
              }}
              onClick={() => navigateToChat('ai-predictions')} 
            />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
