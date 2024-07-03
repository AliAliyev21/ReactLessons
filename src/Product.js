import React from 'react';
import expiredIcon from './images/expired.png';

const Product = ({ product }) => {
  const isExpired = new Date(product.ExpireDate) < new Date();

  return (
    <div className="product">
      <div className="product-image">
        {isExpired && <img src={expiredIcon} alt="Expired" className="expired-icon" />}
        <img src={product.ProductImg} alt={product.Name} className="product-img" />
      </div>
      <div className="product-info">
        <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{product.Name}</h2>
        <p>{product.Description}</p>
        <p>Price: ${product.Price}</p>
        {product.Discount > 0 && <p>Discount: {product.Discount}%</p>}
        <p>Expire Date: {product.ExpireDate}</p>
      </div>
    </div>
  );
};

export default Product;
