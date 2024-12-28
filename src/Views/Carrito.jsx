import React from 'react';
import { useCart } from "../Context/CartContext.jsx";
import '../Styles/Carrito.css';
import { OwnButton } from "../Components/OwnButton.jsx";
import { useNavigate } from 'react-router-dom';

function Carrito({ isOpen, toggleCart }) {/*Componente que muestra el carrito de compras, con la lista de libros seleccionados y la posibilidad de quitarlos, aumentar o disminuir la cantidad de libros y finalizar la compra. */
    const { cart, addToCart, discountToCart, removeFromCart, clearCart } = useCart();/*Se obtienen las funciones y el estado del carrito de compras. */

    const navigate = useNavigate();/*Hook de navegación de React Router. */

    const handleCheckout = () => {/*Función que se ejecuta al hacer click en el botón de finalizar compra. */
        if (cart.length === 0) {
            alert('No hay libros para comprar');
        } else {
            navigate('/Compra');
        }
    };


    return (/* se retorna  la estructura del carrito de compras */
        <div className={`carrito ${isOpen ? 'open' : ''}`}>
            <div className="cart-title">
                <div className="back-button">
                    <OwnButton text={<><i className="fa fa-arrow-left"></i> </>} onClick={toggleCart} />
                </div>
                <img src="/shopping-cart.png" alt="Shopping Cart" className="shopping-cart-icon"/>
                Carrito de compras
            </div>
            {cart.length === 0 ? (/*Si el carrito está vacío se muestra un mensaje. */
                <p className="cart-vacio">El carrito está vacío</p>
            ) : (
                <ul className="cart-container">
                    {cart.map((book) => (
                        <li className="cart-list" key={book.id}>
                            <img className="cart-book-image-cart" src={book.imagen} alt={book.titulo} />
                            <div className="cart-cantidad-control">
                                <OwnButton text="-" onClick={() => discountToCart(book)} />
                                <span className="cart-span">{book.quantity}</span>
                                <OwnButton text="+" onClick={() => addToCart(book)} />
                                <OwnButton text="Quitar del carrito" onClick={() => removeFromCart(book.id)} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-bot-btn">
                <OwnButton text="Finalizar compra" onClick={handleCheckout} />
                <OwnButton text="Vaciar el carrito" onClick={clearCart} />
            </div>
        </div>
    );
}



export default Carrito;