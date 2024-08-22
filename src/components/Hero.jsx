import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="hero-section text-center py-5"
      style={{
        marginTop: "70px",
        backgroundColor: "#ECF0F1", // Fondo claro
        color: "#2C3E50", // Texto principal en azul marino
      }}
    >
      <Container>
        <h1 style={{ color: "#2C3E50" }}>{t('hero.title')}</h1>
        <p className="lead" style={{ color: "#7F8C8D" }}>
          {t('hero.description')}
        </p>
        <Button
          variant="primary"
          size="lg"
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
