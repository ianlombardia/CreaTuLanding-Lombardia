import React from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <div style={styles.container}>
      <img
        src="/error.png"
        alt="Página no encontrada"
        style={styles.image}
      />
      <h1 style={styles.title}>Esta página no existe</h1>
      <Link className="btn btn-dark mt-3" to="/">Volver al inicio</Link>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px'
  },
  image: {
    maxWidth: '400px',
    marginBottom: '20px'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px'
  }
};

export default ErrorComponent;