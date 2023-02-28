import React from 'react';

const Products = () => {
  return (
    <>
      {/* Different products with different details. So whilst we always wanna load the same component but the data that will be displayed in there will be different for the different products. */}
      <h1>The Product Page</h1>
      {/* List of products */}
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

export default Products;
