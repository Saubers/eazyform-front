import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PersonalizedNavbar from './Navbar/Navbar';
import { marineBlue, boneWhite, darkGray, mintGreen } from '../constants/colors'; // Importar los colores

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: 'Free',
      features: [
        '5 data analysis',
        'AI-driven insights',
        'Access to basic reports',
        'Limited export options'
      ],
      buttonLabel: 'Get Started',
      buttonVariant: 'outline-primary',
    },
    {
      name: 'Starter',
      price: '$4.99/month',
      features: [
        'Everything in Free',
        'Priority AI insights',
        'Advanced export options',
        '5 AI reports per month'
      ],
      buttonLabel: 'Choose Plan',
      buttonVariant: 'primary',
    },
    {
      name: 'Pro',
      price: '$15.99/month',
      features: [
        'Everything in Starter',
        'Unlimited AI reports',
        'Custom dashboards',
        'Dedicated support'
      ],
      buttonLabel: 'Choose Plan',
      buttonVariant: 'primary',
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'On-premise deployment',
        'Dedicated Account Manager'
      ],
      buttonLabel: 'Contact Us',
      buttonVariant: 'outline-primary',
    }
  ];

  return (
    <Container className="py-5" style={{ backgroundColor: boneWhite }}>
      <PersonalizedNavbar />
      <h1 className="text-center mb-5" style={{ color: marineBlue }}>Pricing</h1>
      <Row>
        {pricingPlans.map((plan, idx) => (
          <Col key={idx} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: 15, backgroundColor: darkGray, color: boneWhite }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center" style={{ color: mintGreen }}>{plan.name}</Card.Title>
                <Card.Subtitle className="text-center mb-3" style={{ color: boneWhite }}>{plan.price}</Card.Subtitle>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill" style={{ color: mintGreen }}></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <Button variant={plan.buttonVariant === 'primary' ? 'primary' : 'outline-light'} size="lg" style={plan.buttonVariant === 'primary' ? { backgroundColor: mintGreen, borderColor: mintGreen, color: boneWhite } : { color: mintGreen, borderColor: mintGreen }}>
                    {plan.buttonLabel}
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

export default PricingPage;
