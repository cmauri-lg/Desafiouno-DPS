import React from "react";
export const Headers = () => {
  return (
    <header>
      <h1>Tienda de Tecnologia</h1>
      <div className="container-icon">
        <div className="container-cart-icon">
          <img
            src="https://w7.pngwing.com/pngs/275/763/png-transparent-cart-shopping-supermarket-shopping-cart-ecommerce-e-commerce-shopping-trolley-caddy.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">0</span>
          </div>
        </div>
        <div className="container-cart-products hidden-cart">
          <div className="row-product hidden">
            <div className="cart-product">
              <div className="info-cart-product">
                <span className="cantidad-producto-carrito">121</span>
                <p className="titulo-producto-carrito">CPU</p>
                <span className="precio-producto-carrito">$100000</span>
              </div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                alt="cerrar"
                className="icon-close"
              />
            </div>
          </div>
          <div className="cart-total hidden">
            <h3>Total:</h3>
            <span className="total-pagar">$1000000</span>
          </div>
          <p className="cart-empty">El carrito está vacío</p>
        </div>
      </div>
    </header>
  );
};
