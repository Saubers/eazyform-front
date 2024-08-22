import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './Hero.css'; // Importa el archivo de estilos CSS para las animaciones

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-section text-center py-5 fade-in">
      <Container>
        <h1 className="fade-in-down">{t('hero.title')}</h1>
        <p className="lead fade-in-down">
          {t('hero.description')}
        </p>
        <Button
          variant="primary"
          size="lg"
          className="fade-in-up"
          style={{
            backgroundColor: "#1ABC9C", // Color del botón
            borderColor: "#1ABC9C", // Borde del botón
            color: "#ECF0F1", // Texto del botón en color claro
          }}
        >
          {t('hero.button')}
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
