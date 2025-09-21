import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
import { toast } from 'react-hot-toast';



const ItemDetail = ({ detalle }) => {
  const [comprar, setComprar] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
  setComprar(true);
  addItem(detalle, cantidad);
  toast.success(
  `Se agregó ${cantidad} unidad${cantidad > 1 ? 'es' : ''} al carrito`,
  {
    position: "top-right",
    duration: 3000,
  }
);
};
  
const stockActualizado = detalle.stock - itemQuantity(detalle.id);


  return (
    <div className="detalle-container">
  

      <div className="detalle-card">
        <div className="detalle-img">
          <img src={detalle.image} alt={detalle.name} />
        </div>

        <div className="detalle-info">
          <h2 className="detalle-titulo">{detalle.name}</h2>
          <p className="detalle-descripcion">{detalle.description}</p>
          <p className="detalle-precio">${detalle.price},00</p>
          <p className="detalle-stock">Stock disponible: {stockActualizado}</p>

          {comprar ? (
            <Link
              to="/cart"
              className="btn btn-warning fw-bold text-dark text-uppercase mt-3 shadow-sm"
              style={{ letterSpacing: '1px' }}
            >
              🛒 Ir al Carrito
            </Link>
          ) : (
            <ItemCount stock={stockActualizado} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
