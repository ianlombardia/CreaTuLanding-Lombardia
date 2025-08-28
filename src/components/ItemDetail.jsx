import React from 'react'

export const ItemDetail = ({detalle}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#fafafaff',
  }
  const imageStyle = {
    width: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '10px',
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#28a745',
  };





  return (
    <div style={containerStyle}>
    <h1>{detalle.name}</h1>
    <img style={imageStyle} src={detalle.image} alt={detalle.name} />
    <p style={infoStyle}>{detalle.description}</p>
    <p style={priceStyle}>${detalle.price},00</p>
    <p>stock disponible: {detalle.stock}</p>
    </div>

  )
}

export default ItemDetail