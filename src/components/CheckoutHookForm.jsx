import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../service/firebase';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutHookForm = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();


  const finalizarCompra = (data) => {

    let order = {
      comprador: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        tel: data.tel,
      },
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
          <form onSubmit={handleSubmit(finalizarCompra)} className="row g-3">

            <div className="col-md-6">
              <input
                type="text"
                placeholder="Nombre"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                {...register('nombre', {
                  required: 'El nombre es obligatorio',
                  minLength: { value: 2, message: 'Debe tener al menos 2 caracteres' },
                })}
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
            </div>

            <div className="col-md-6">
              <input
                type="text"
                placeholder="Apellido"
                className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                {...register('apellido', {
                  required: 'El apellido es obligatorio',
                  minLength: { value: 2, message: 'Debe tener al menos 2 caracteres' },
                })}
              />
              {errors.apellido && <div className="invalid-feedback">{errors.apellido.message}</div>}
            </div>

            <div className="col-md-6">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email', {
                  required: 'El correo es obligatorio',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Correo electrónico inválido',
                  },
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            <div className="col-md-6">
              <input
                type="email"
                placeholder="Confirmar correo"
                className={`form-control ${errors['repeat-email'] ? 'is-invalid' : ''}`}
                {...register('repeat-email', {
                  required: 'Confirmar el correo es obligatorio',
                  validate: (value) =>
                    value === getValues('email') || 'Los correos no coinciden',
                })}
              />
              {errors['repeat-email'] && <div className="invalid-feedback">{errors['repeat-email'].message}</div>}
            </div>

            <div className="col-md-12">
              <input
                type="tel"
                placeholder="Teléfono"
                className={`form-control ${errors.tel ? 'is-invalid' : ''}`}
                {...register('tel', {
                  required: 'El teléfono es obligatorio',
                  minLength: {
                    value: 8,
                    message: 'Debe tener al menos 8 dígitos',
                  },
                })}
              />
              {errors.tel && <div className="invalid-feedback">{errors.tel.message}</div>}
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

export default CheckoutHookForm;
