import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();/* Se crea el contexto para el carrito */

export const CartProvider = ({ children }) => {/* Componente para el proveedor del carrito */
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {/* Función para agregar un libro al carrito */
        setCart((prevCart) => {/* Se actualiza el estado del carrito */
            const existingBook = prevCart.find(item => item.id === book.id);/* Se busca si el libro ya está en el carrito */
            if (existingBook) {/* Si el libro ya está en el carrito */
                return prevCart.map(item =>/* Se actualiza la cantidad del libro en el carrito */
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {/* Si el libro no está en el carrito */
                return [...prevCart, { ...book, quantity: 1 }];
            }
        });
    };

    const discountToCart = (book) => {/* Función para disminuir la cantidad de un libro en el carrito */
        setCart((prevCart) => {/* Se actualiza el estado del carrito */
            const existingBook = prevCart.find(item => item.id === book.id);/* Se busca si el libro ya está en el carrito */
            if (existingBook) {/*   Si el libro ya está en el carrito */
                if (existingBook.quantity > 1) {/* Si la cantidad del libro es mayor a 1 */
                    return prevCart.map(item =>/* Se actualiza la cantidad del libro en el carrito */
                        item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item/* Se disminuye la cantidad del libro */
                    );
                } else {
                    return prevCart.filter(item => item.id !== book.id);/* Se elimina el libro del carrito */
                }
            }
            return prevCart;/* Se retorna el carrito sin cambios */
        });
    };


    const removeFromCart = (id) => {/* Función para eliminar un libro del carrito */
        setCart((prev) => prev.filter((item) => item.id !== id));/* Se actualiza el estado del carrito */
    };

    const clearCart = () => {/* Función para vaciar el carrito */
        setCart([]);/* Se actualiza el estado del carrito */
    };

    return (/* Se retorna el proveedor del carrito */
        <CartContext.Provider value={{ cart, addToCart, discountToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);/* Hook para usar el contexto del carrito */