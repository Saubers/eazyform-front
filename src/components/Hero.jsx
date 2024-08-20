import { Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      className="hero-section bg-light text-center py-5"
      style={{ marginTop: "70px" }}
    >
      <Container>
        <h1>{t('hero.title')}</h1>
        <p className="lead">{t('hero.description')}</p>
        <Button variant="primary" size="lg">
          {t('hero.button')}
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
