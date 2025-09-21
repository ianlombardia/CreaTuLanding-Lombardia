import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ prod }) {
  return (
    <Card className="h-100 shadow-sm product-card">
      
      
      <Card.Img
        variant="top"
        src={prod.image}
        alt={prod.name}
        style={{
          height: '250px',
          objectFit: 'contain',
          filter: 'drop-shadow(2px 4px 6px black)',
        }}
      />

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-semibold text-dark">
            {prod.name}
          </Card.Title>
          <Card.Text className="text-success fw-bold fs-5">
            ${prod.price},00
          </Card.Text>
        </div>

        <div className="mt-3 d-grid">
          <Link
            className="btn btn-primary btn-sm text-uppercase fw-bold"
            to={`/item/${prod.id}`}
          >
            Ver Más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
