import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../service/firebase';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validEmail, setValidEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

  
    if (buyer.email !== validEmail) {
      Swal.fire("⚠️ Los correos no coinciden. Verificalos y volvé a intentarlo.");
      return;
    }

    const order = {
      comprador: buyer,
      compras: cart,
      total: total(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, 'orders');

    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {orderId ? (
        <div className="container text-center mt-5">
          <h2 className="text-success fw-bold">¡Gracias por tu compra!</h2>
          <p className="fs-5">Tu número de orden es:</p>
          <span className="badge bg-dark fs-6 px-3 py-2">{orderId}</span>
        </div>
      ) : (
        <div className="container mt-5">
          <h1 className="text-center mb-4 fw-bold text-uppercase" style={{ letterSpacing: '2px', color: '#0d47a1' }}>
            Finalizá tu compra
          </h1>
          <form onSubmit={finalizarCompra} className="row g-3">

            <div className="col-md-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-control"
                onChange={buyerData}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="form-control"
                onChange={buyerData}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="form-control"
                onChange={buyerData}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="repeat-email"
                placeholder="Confirmar correo"
                className="form-control"
                onChange={(e) => setValidEmail(e.target.value)}
                required
              />
            </div>

            <div className="col-md-12">
              <input
                type="tel"
                name="tel"
                placeholder="Teléfono"
                className="form-control"
                onChange={buyerData}
                required
              />
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-warning fw-bold text-dark px-5">
                Confirmar Compra 🛒
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
