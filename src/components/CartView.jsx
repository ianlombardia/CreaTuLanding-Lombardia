import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../css/CartView.css';

const CartView = () => {
  const {
    cart,
    removeItem,
    clear,
    total,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 className="titulo-carrito">Tu carrito</h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((compra) => (
            <div key={compra.id} className="card-carrito">
              <div className="card-carrito-img">
                <img src={compra.image} alt={compra.name} />
              </div>
              <div className="card-carrito-detalles">
                <h5>{compra.name}</h5>
                <p>Precio: ${compra.price},00</p>

                <div className="cantidad-control">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => decreaseItemQuantity(compra.id)}
                    disabled={compra.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="cantidad-numero">{compra.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => increaseItemQuantity(compra.id)}
                    disabled={compra.quantity >= compra.stock}
                  >
                    +
                  </button>
                </div>

                <p>Subtotal: ${compra.quantity * compra.price},00</p>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(compra.id)}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          ))}

          <div className="resumen-carrito">
            <h4>Total a pagar: ${total()},00</h4>
            <div className="acciones-carrito">
              <button className="btn btn-danger" onClick={clear}>
                Vaciar carrito
              </button>
              <Link className="btn btn-success" to="/Checkout">
                Finalizar compra
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
