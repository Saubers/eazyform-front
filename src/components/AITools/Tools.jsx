import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { boneWhite, darkGray, marineBlue, mintGreen } from '../../constants/colors';
import PersonalizedNavbar from '../Navbar/Navbar';


const AITools = () => {
  const tools = [
    {
      name: 'AI Data Analysis',
      description: 'Get insights from your data with our AI-driven analysis tools.',
      buttonLabel: 'Learn More',
    },
    {
      name: 'SEO Optimizer',
      description: 'Optimize your website for search engines with advanced AI.',
      buttonLabel: 'Learn More',
    },
    {
      name: 'Price Comparator',
      description: 'Compare product prices across multiple platforms with AI accuracy.',
      buttonLabel: 'Learn More',
    },
    {
      name: 'Content Generator',
      description: 'Generate high-quality content based on AI-driven algorithms.',
      buttonLabel: 'Learn More',
    },
    {
      name: 'Custom AI Models',
      description: 'Create custom AI models tailored to your business needs.',
      buttonLabel: 'Learn More',
    }
  ];

  return (
    <Container className="py-5" style={{ backgroundColor: boneWhite }}>
    <PersonalizedNavbar /> 
      <h1 className="text-center mb-5" style={{ color: marineBlue }}>AI Tools</h1>
      <Row>
        {tools.map((tool, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: 15, backgroundColor: marineBlue, color: boneWhite }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center" style={{ color: mintGreen }}>{tool.name}</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: boneWhite }}>
                  {tool.description}
                </Card.Text>
                <div className="mt-auto text-center">
                  <Button variant="primary" size="lg" style={{ backgroundColor: mintGreen, borderColor: mintGreen, color: boneWhite }}>
                    {tool.buttonLabel}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AITools;
