import React, {useContext} from 'react';
import {Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {cart, cartQuantity} = useContext(CartContext);
    console.log(CartContext, 'contecto')
      return (
    <div className="cart-widget">
      <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
        <FontAwesomeIcon icon={faCartShopping} bounce style={{ color: "#f9c91a", fontSize: '24px'}} />
        {cart.length > 0 && (
          <Badge bg="success" pill style={{ position: 'absolute', top: '-5px', right: '-40px' }}>
            {cartQuantity()}
          </Badge>
        )}
      </Link>
    </div>
  );
};


export default CartWidget;