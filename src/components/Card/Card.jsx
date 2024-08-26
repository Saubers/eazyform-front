import { Card } from 'react-bootstrap';
import './Card.css'; // Archivo CSS para los estilos personalizados
import { darkGray } from '../../constants/colors';

const PersonalizedCard = ({ title, text, onClick }) => {
    return (
        <Card className="mb-4 hover-card" onClick={onClick}>
            <Card.Body>
                <Card.Title color={darkGray}>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PersonalizedCard;
