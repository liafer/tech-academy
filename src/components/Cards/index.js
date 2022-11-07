import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AI from '../../assets/ai.png'
import './cards.css'

export default function Cards() {
    return (
        <div className='cards_style'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Machine Learning</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Start Course</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Data Analytics</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Start Course</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Big Data</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Start Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
}