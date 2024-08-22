import { Card } from 'react-bootstrap';
import './Card.css'; // Archivo CSS para los estilos personalizados

const PersonalizedCard = ({ title, text, onClick }) => {
    return (
        <Card className="mb-4 hover-card" onClick={onClick}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PersonalizedCard;
