"use client";
import { useState } from "react";

export const Headers = ({
  getAllProducts,
  setAllProducts,
  getTotal,
  setTotal,
  getCountProducts,
  setCountProducts,
}) => {
  
  const [getactive, setActive] = useState(false);
  
  const onDeleteProduct = (product) => {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este artículo del carrito?');
    if(confirmed){
    const results = getAllProducts.filter((item) => item.id !== product.id);
    
    setTotal(getTotal - product.price * product.quantity);
    setCountProducts(getCountProducts - product.quantity);
    setAllProducts(results);
  }};
  const onCleanCart = () => {
    const confirmed = window.confirm('¿Estás seguro de que vaciar el carrito?');
    if(confirmed){
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  }};

  return (
    <header>
      <h1>Tienda de Tecnologia</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!getactive)}>
          <img
            src="https://w7.pngwing.com/pngs/275/763/png-transparent-cart-shopping-supermarket-shopping-cart-ecommerce-e-commerce-shopping-trolley-caddy.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{getCountProducts}</span>
          </div>
        </div>

        <div className={`container-cart-products ${ getactive ?'':'hidden-cart'}`}>
        {getAllProducts.length ? ( 
          <>
          <div className="row-product">
            {getAllProducts.map(product =>(
              <div className='cart-product' key = {product.id}>
              <div className='info-cart-product'>
                <figure className="tamanho">
                  <img className="tamanho" src={product.urlImage} />
                </figure>
                <span className='cantidad-producto-carrito'> {product.quantity} </span>
                <p className='titulo-producto-carrito'> {product.title} </p> 
                <span className='precio-producto-carrito'> ${product.price} </span> 
                </div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                alt="cerrar"
                className="icon-close"
                onClick = {()=> onDeleteProduct(product)}
              />
            </div>
             ))}
          </div>

          <div className="cart-total">
            <h3>Total:</h3>
            <span className="total-pagar">${getTotal}</span>
          </div>

          <button className='btn-clear-all' onClick={onCleanCart}> Vaciar Carrito </button> </> ) : ( <p className='cart-empty'>El carrito está vacío</p> )}
        </div>
      </div>
    </header>
  );
};
