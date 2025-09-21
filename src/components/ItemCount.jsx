import { useState } from "react";
import '../css/button.css';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <>
      {stock > 0 ? (
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={restar}
              disabled={count <= 1}
              className="btn btn-outline-warning fw-bold fs-4"
            >
              -
            </button>

            <span className="fs-4 fw-semibold text-dark">{count}</span>

            <button
              onClick={sumar}
              disabled={count >= stock}
              className="btn btn-outline-warning fw-bold fs-4"
            >
              +
            </button>
          </div>

          <button
            disabled={count === 0}
            onClick={comprar}
            className={`btn btn-bac fw-bold text-uppercase px-4 py-2 shadow ${
              count === 0 ? 'disabled' : ''
            }`}
          >
            Comprar
          </button>
        </div>
      ) : (
        <p className="text-danger fw-bold mt-4">Lo sentimos, no hay stock disponible</p>
      )}
    </>
  );
};

export default ItemCount;
