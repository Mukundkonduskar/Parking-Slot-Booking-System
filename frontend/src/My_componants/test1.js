import React from 'react';

const Card = ({amount,img,checkoutHandler}) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const priceTagStyle = {
    marginBottom: '16px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  const imgStyle = {
    maxWidth: '100%',  // Ensure the image fits within the card's width
    maxHeight: '150px', // Set a maximum height for the image
  };

  return (
    <div style={cardStyle}>
      <img
        src={img}
        alt="i"
        style={priceTagStyle,imgStyle}
      />
      <h2>Product Name</h2>
      <p>Product description goes here.</p>
      <p>Price:{amount}</p>
      <button style={buttonStyle} onClick={()=>checkoutHandler(amount)}>Buy Now</button>
    </div>
  );
};

export default Card;
