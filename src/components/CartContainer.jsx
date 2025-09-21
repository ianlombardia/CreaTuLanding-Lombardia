import React, {useContext } from 'react'
import { CartContext } from '../context/CartContext';
import EmptyCart from './EmptyCart';
import CartView from './CartView';


const CartContainer = () => {
    const {cart} = useContext(CartContext);
  return (
    <>
    {
        !cart.length ? <EmptyCart/> : <CartView/>

    }


    </> )
}


export default CartContainer
