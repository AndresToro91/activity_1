import React from "react";
import { LibrosContext } from "../Context/LibroContext.jsx";
import Libreria from "../Components/Libreria.jsx";
import "../Styles/Principal.css";
import "../Styles/Footer.css";
import "../Styles/Header.css";
import "../Styles/BarMenu.css";
import "../Styles/SearchBar.css";
import "../Styles/Libreria.css";
import "../Styles/OwnButton.css";
import "../Styles/LibroDetalle.css";
import "../Styles/Carrito.css";
import "../Styles/Compra.css";
import "../Styles/NotFound.css"





export const Principal = () => {/*Componente que muestra la lista de libros disponibles. */
    const { filteredLibros } = React.useContext(LibrosContext);/*Se obtienen los libros del contexto. */

    if (!filteredLibros || filteredLibros.length === 0) {/*Si no hay libros se muestra un mensaje. */
        return <p>Cargando libros...</p>;
    }

    return (/* se retorna  la estructura de la lista de libros */

        <div className="libro-container">
            <div className="libro-container-det">
                {filteredLibros.map((libro, index) => (/*Se recorre la lista de libros y se muestra cada uno de ellos. */
                    <Libreria
                        key={index}
                        id={libro.id}
                        titulo={libro.titulo}
                        autor={libro.autor}
                        descripcion={libro.descripcion}
                        genero={libro.genero}
                        imagen={libro.imagen}
                    />
                ))}
            </div>
        </div>

    );
};