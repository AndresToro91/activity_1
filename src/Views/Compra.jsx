import { useNavigate } from 'react-router-dom';
import {OwnButton} from "../Components/OwnButton.jsx";
import React from "react";
import { useCart } from "../Context/CartContext.jsx";

const Checkout = () => {/*Componente que muestra el resumen de la compra, con la lista de libros seleccionados y el total a pagar. */
  const { cart, clearCart } = useCart();/*Se obtienen las funciones y el estado del carrito de compras. */
  const navigate = useNavigate();/*Hook de navegación de React Router. */

  const handleCheckout = () => {/*Función que se ejecuta al hacer click en el botón de finalizar compra. */
    alert('¡Pedido realizado con éxito!');
    clearCart();
    navigate('/Principal');
  };

  const totalGeneral = cart.reduce((total, item) => total + item.precio * item.quantity, 0);/*Se calcula el total general de la compra. */

  return (/* se retorna  la estructura del resumen de la compra */
      <div className="checkout">
          <div className="checkout-title">Resumen de compra</div>
          <ul>
              <div className="checkout-container">
                  {cart.map((item) => (
                      <li className="cart-list" key={item.id}>
                          <img className="cart-book-image-cart" src={item.imagen} alt={item.titulo}/>
                          <div className="checkout-det">
                              <span>Cantidad: {item.quantity}</span>
                              <span>Precio unitario: ${item.precio.toFixed(2)}</span>
                              <span>Total: ${(item.precio * item.quantity).toFixed(2)}</span>
                          </div>
                      </li>
                  ))}
              </div>
          </ul>
          <h2>Total General: ${totalGeneral.toFixed(2)}</h2>
          <OwnButton text="Finalizar compra" onClick={handleCheckout}/>
          <img className="cart-book-image-buy" src={"/img/pago.png"} alt="Opciones_pago"/>
      </div>
  );
};
export default Checkout;