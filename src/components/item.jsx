import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({ prod }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={prod.image} style={{ height: '250px', objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text className="text-success fw-bold">
            ${prod.price},00
          </Card.Text>
        </div>
        <div className="mt-3 d-grid gap-2">
          <Link className="btn btn-primary" to={`/item/${prod.id}`}>
            Ver Más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}


export default Item;