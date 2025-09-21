import React from 'react';


const LoaderComponent = () => {
  return (
    <div style={styles.container}>
      <img src="/escudoBoca.png" alt="Escudo de Boca Juniors" style={styles.image} />
      <p style={styles.text}>Cargando productos...</p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh', 
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor: '#ffffff',
  },
  image: {
  height: '200px',
  animation: 'pulse 1.5s ease-in-out infinite',
},
  text: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0033A0',
  },
};

export default LoaderComponent;