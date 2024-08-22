import { Container, Nav } from 'react-bootstrap';
import { marineBlue } from '../constants/colors';

const Footer = () => {
  return (
    <footer
      className="footer text-white text-center py-4"
      style={{
        backgroundColor: marineBlue,
        position: 'fixed',     // Fija el footer al fondo de la pantalla
        bottom: 0,             // Posición en la parte inferior
        left: 0,               // Asegura que empiece desde el borde izquierdo
        width: '100%',         // Asegura que cubra todo el ancho
        zIndex: 1000,          // Asegura que el footer esté sobre otros elementos
      }}
    >
      <Container>
        <p>© 2024 AI Data Analytics. All rights reserved.</p>
        <Nav className="justify-content-center">
          <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
          <Nav.Link href="#" className="text-white">Terms of Service</Nav.Link>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
