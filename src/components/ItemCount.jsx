import { useState, useEffect, use } from "react";
import '../css/button.css'






const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);


    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);

        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1);

        }
    }
    const comprar = () => {
        onAdd(count)
    }

    return (
        <div className="d-flex flex-column align-items-center gap-3 mt-4">

            <div className="d-flex align-items-center gap-3">
                <button
                    onClick={restar}
                    className="btn btn-outline-warning fw-bold fs-4"
                >
                    -
                </button>

                <span className="fs-4 fw-semibold text-dark">{count}</span>

                <button
                    onClick={sumar}
                    className="btn btn-outline-warning fw-bold fs-4"
                >
                    +
                </button>
            </div>

            <button
                disabled={stock === 0 || count === 0}
                onClick={comprar}
                className={`btn btn-bac fw-bold text-uppercase px-4 py-2 shadow ${stock === 0 || count === 0 ? 'disabled' : ''
                    }`}
            >
                Comprar
            </button>
        </div>
    );

}



export default ItemCount;

