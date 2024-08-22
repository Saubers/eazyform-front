import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import PersonalizedNavbar from './Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f0f0f0', width: 1000 }}>
    <PersonalizedNavbar />
      <Row className="w-100">
        <Col md={8} lg={6} xl={5} className="mx-auto">
          <Card className="p-5 shadow border-0" style={{ borderRadius: '10px' }}>
            <h2 className="text-center mb-4" style={{ fontWeight: '600', fontSize: '1.8rem' }}>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label style={{ fontSize: '1.2rem', fontWeight: '500' }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="py-2"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label style={{ fontSize: '1.2rem', fontWeight: '500' }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="py-2"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 py-2" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                Login
              </Button>

              <div className="text-center mt-3">
                <a href="/forgot-password" className="d-block mb-2" style={{ fontSize: '0.9rem', color: '#007bff' }}>
                  Forgot Password?
                </a>
                <a href="/register" style={{ fontSize: '0.9rem', color: '#007bff' }}>
                  Create a new account
                </a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
