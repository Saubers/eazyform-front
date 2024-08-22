import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';
import { marineBlue, boneWhite, mintGreen } from '../../constants/colors'; // Import colors
import './Navbar.css'; // Import custom styles

const PersonalizedNavbar = () => {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: marineBlue }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: boneWhite }}>
          AI Data Analytics
        </Navbar.Brand>
        <LanguageSelector />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={t('navbar.tools')} id="tools-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="/tool1">{t('tools.tool1')}</NavDropdown.Item>
              <NavDropdown.Item href="/tool2">{t('tools.tool2')}</NavDropdown.Item>
              <NavDropdown.Item href="/tool3">{t('tools.tool3')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/all-tools">{t('tools.all')}</NavDropdown.Item>
            </NavDropdown>
      <Nav.Link href="/pricing" 
      style={{ color: boneWhite }}>
              {t('navbar.pricing')}
            </Nav.Link>
            <Button
              href="/signup"
              variant="outline-light"
              className="ms-3"
              style={{
                backgroundColor: mintGreen,
                borderColor: mintGreen,
                color: boneWhite,
              }}
            >
              {t('navbar.signup')}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PersonalizedNavbar;
