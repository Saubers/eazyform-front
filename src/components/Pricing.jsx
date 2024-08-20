import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: 'Free',
      features: [
        'Unlimited data analysis',
        'AI-driven insights',
        'Access to basic reports',
        'Limited export options'
      ],
      buttonLabel: 'Get Started',
      buttonVariant: 'outline-primary',
    },
    {
      name: 'Starter',
      price: '$19.99/month',
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
      price: '$49.99/month',
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
    <Container className="py-5">
      <h1 className="text-center mb-5">Pricing</h1>
      <Row>
        {pricingPlans.map((plan, idx) => (
          <Col key={idx} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{plan.name}</Card.Title>
                <Card.Subtitle className="text-center mb-3">{plan.price}</Card.Subtitle>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary"></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <Button variant={plan.buttonVariant} size="lg">
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
