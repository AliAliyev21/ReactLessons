import React, { useState } from 'react';
import Product from './Product';
import NavBar from './NavBar';

const initialProducts = [
  { ProductId: 1, Name: 'Fanta', Price: 10, Discount: 7, Description: 'Description 1', ExpireDate: '2023-06-01', ProductImg: 'https://www.coca-cola.com/content/dam/onexp/gb/en/brands/fanta/Product-Information-fanta-orange.jpg' },
  { ProductId: 2, Name: 'Coco Cola', Price: 20, Discount: 5, Description: 'Description 2', ExpireDate: '2024-12-01', ProductImg: 'https://bazarstore.az/cdn/shop/products/0e1e3a8d4f3945d1bb68b55c241ac32a.jpg?v=1693638990' },
  { ProductId: 3, Name: 'Sprite', Price: 15, Discount: 2, Description: 'Description 3', ExpireDate: '2024-08-01', ProductImg: 'https://cdn.shoplightspeed.com/shops/609238/files/3198462/sprite-12-oz-can.jpg' },
  { ProductId: 4, Name: 'Pepsi', Price: 25, Discount: 10, Description: 'Description 4', ExpireDate: '2023-07-01', ProductImg: 'https://www.pepsico.com/images/default-source/products-brands/pepsi_12oz.png?sfvrsn=46c9ae09_3' },
  { ProductId: 5, Name: 'Mirinda', Price: 30, Discount: 8, Description: 'Description 5', ExpireDate: '2023-09-01', ProductImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FtL_bmWPkmslNXu5Ltacn0pxKVthhujAKQ&s' },
];

const Main = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleSearch = (term) => {
    const filtered = products.filter(product =>
      product.Name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <main>
      <NavBar onSearch={handleSearch} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <Product key={product.ProductId} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
