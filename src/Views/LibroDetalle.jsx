import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import {LibrosContext} from "../Context/LibroContext.jsx";
import {OwnButton} from "../Components/OwnButton.jsx";
import { useCart } from "../Context/CartContext.jsx";



const LibroDetalle = () => {/*Componente que muestra los detalles de un libro en particular. */
    const { BookID } = useParams();/*Hook que permite obtener los parámetros de la URL. */
    const { libros } = useContext(LibrosContext);/*Se obtienen los libros del contexto. */
    const { addToCart } = useCart();/*Se obtiene la función para adicionar al carrito de compras. */
    const libro = libros.find(Idlibro => Idlibro.id === BookID);/*Se busca el libro con el ID recibido por parámetro. */

    if (!libro) {/*Si no se encuentra el libro se muestra un mensaje. */
        return <h2>Libro no encontrado</h2>;
    }

    const handleAddToCart = () => {/*Función que se ejecuta al hacer click en el botón de adicionar al carrito. */
        addToCart(libro);
    };

    return (/* se retorna  la estructura de los detalles del libro */
        <>
            <div className="libro-container">
                <div className="libro-details">
                    <img className="libro-Image" src={libro.imagen} alt={libro.titulo} />
                    <p className="libro-Author"> {libro.autor}</p>
                    <p className="libro-Genre">{libro.genero}</p>
                    <p className="libro-Description">{libro.descripcion}</p>
                    <p className="libro-Precio">Precio: ${libro.precio}</p>
                    <OwnButton text="Adicionar al carrito" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    );
}

export default LibroDetalle;