import React from "react";
import { data } from "../data.js";

export const ProductList = ({
  getAllProducts,
  setAllProducts,
  getTotal,
  setTotal,
  getCountProducts,
  setCountProducts,}
) => {

  const onAddProduct = product =>{
    if (getAllProducts.find(item => item.id === product.id)) {
      const products = getAllProducts.map(item => 
        item.id === product.id 
        ? {...item, quantity : item.quantity + 1}
        :item
      );
        setTotal(getTotal + product.price * product.quantity); 
        setCountProducts(getCountProducts + product.quantity); 
        return setAllProducts([...products]);
    }

    setTotal(getTotal + product.price * product.quantity); 
    setCountProducts(getCountProducts + product.quantity); 
    setAllProducts([...getAllProducts, product]);
  };

  return (
    <div className="container-items">
      {data.map(product => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            <button onClick={()=>onAddProduct(product)}>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};
