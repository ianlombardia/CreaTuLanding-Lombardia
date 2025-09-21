import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="text-danger fw-bold">¡El carrito está vacío!</h2>
      <h4 className="mb-4">¿Qué esperás? ¡Date una vuelta por nuestros productos!</h4>
      <Link className="btn btn-dark btn-lg fw-bold text-uppercase" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default EmptyCart;
