import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom';  // Para obtener el parámetro de la URL
import { boneWhite, darkGray, marineBlue, mintGreen } from '../../constants/colors';
import PersonalizedNavbar from '../Navbar/Navbar';

const AIChat = ({ onSendMessage }) => {
  // Array de servicios de IA
  const aiServices = [
    {
      service: 'excel-form',
      title: 'Excel Form Generator',
      placeholder: 'Generate an Excel formula, e.g., "Multiply values in B by C where dates in A are after 06/10/2023."',
    },
    {
      service: 'data-analysis',
      title: 'Data Analysis',
      placeholder: 'Ask the AI to analyze data, e.g., "Analyze sales trends for the past year."',
    },
    {
      service: 'seo-optimization',
      title: 'SEO Optimization',
      placeholder: 'Ask the AI for SEO tips, e.g., "How can I improve my website ranking?"',
    },
    {
      service: 'price-comparison',
      title: 'Price Comparison',
      placeholder: 'Ask the AI to compare prices, e.g., "Compare the price of laptops."',
    },
    {
      service: 'content-generation',
      title: 'Content Generation',
      placeholder: 'Ask the AI to generate content, e.g., "Write a blog post about AI advancements."',
    },
  ];

  const { service: serviceFromURL } = useParams();  // Obtener el servicio desde la URL

  // Estado para el servicio seleccionado, con el servicio de la URL por defecto
  const [selectedService, setSelectedService] = useState(aiServices.find(s => s.service === serviceFromURL) || aiServices[0]);

  // Estado para los mensajes
  const [chatHistory, setChatHistory] = useState({
    'excel-form': [{ text: 'Hello! How can I assist you with Excel formulas today?', fromAI: true }],
    'data-analysis': [{ text: 'Hello! How can I assist you with data analysis today?', fromAI: true }],
    'seo-optimization': [{ text: 'Hello! How can I assist you with SEO optimization today?', fromAI: true }],
    'price-comparison': [{ text: 'Hello! How can I assist you with price comparisons today?', fromAI: true }],
    'content-generation': [{ text: 'Hello! How can I assist you with content generation today?', fromAI: true }],
  });

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      const userMessage = { text: input, fromAI: false };

      // Agregar el mensaje del usuario y la respuesta de la IA al historial del servicio seleccionado
      const updatedMessages = [...chatHistory[selectedService.service], userMessage];

      // Simular respuesta de la IA (aquí iría la llamada a la API)
      const aiResponse = { text: `AI response for: ${selectedService.title}`, fromAI: true };
      updatedMessages.push(aiResponse);

      // Actualizar el historial de mensajes del servicio seleccionado
      setChatHistory((prevHistory) => ({
        ...prevHistory,
        [selectedService.service]: updatedMessages,
      }));

      // Resetear el input
      setInput('');
    }
  };

  return (
    <Container fluid className="d-flex flex-column p-0 m-0" style={{ height: '80vh', width: '100vh', overflow: 'hidden' }}>
      <PersonalizedNavbar />
      
      {/* Main chat area */}
      <div className="d-flex flex-column flex-grow-1" style={{ backgroundColor: marineBlue, height: '100%' }}>
        {/* Dropdown in the Header */}
        <div className="text-center p-3 d-flex justify-content-center" style={{ backgroundColor: mintGreen, color: boneWhite }}>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedService.title}
            variant="light"
            onSelect={(service) => {
              const selected = aiServices.find((s) => s.service === service);
              setSelectedService(selected);
            }}
          >
            {aiServices.map((service) => (
              <Dropdown.Item key={service.service} eventKey={service.service}>
                {service.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        {/* Scrollable messages area */}
        <div className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: darkGray }}>
          {chatHistory[selectedService.service].map((message, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: message.fromAI ? 'flex-start' : 'flex-end',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  maxWidth: '70%',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: message.fromAI ? marineBlue : mintGreen,
                  color: boneWhite,
                  fontSize: '1rem',
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input area fixed at the bottom */}
        <Form onSubmit={handleSubmit} className="p-3" style={{ backgroundColor: marineBlue }}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={selectedService.placeholder}  // Placeholder dinámico basado en el servicio seleccionado
                style={{
                  backgroundColor: boneWhite,
                  color: boneWhite,
                  borderColor: mintGreen,
                  fontSize: '1.1rem',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                style={{
                  backgroundColor: mintGreen,
                  borderColor: mintGreen,
                  fontSize: '1.2rem',
                  color: boneWhite,
                  padding: '10px 20px',
                  borderRadius: '10px',
                }}
              >
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default AIChat;
