
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../Views/Landing.jsx';
import { Principal } from '../Views/Principal.jsx';
import Carrito from '../Views/Carrito.jsx';
import Compra from '../Views/Compra.jsx';
import Notfound from '../Views/Notfound.jsx';
import LibroDetalle from "../Views/LibroDetalle.jsx";
import { Header } from "../Components/Header.jsx";
import { BarMenu } from "../Components/BarMenu.jsx";
import { LibrosContext } from "../Context/LibroContext.jsx";

function PageRouter() {
    const { libros } = React.useContext(LibrosContext);
    const [isCartOpen, setIsCartOpen] = useState(false);/* Estado para abrir y cerrar el carrito */

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);/* Cambia el estado del carrito */
    };

    /* Se pasa el estado y la función para abrir y cerrar el carrito */
    return (
        <BrowserRouter>
            <Header />
            <BarMenu isCartOpen={isCartOpen} toggleCart={toggleCart} />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Principal/" element={<Principal libros={libros} />} />
                <Route path="/Libro/:BookID" element={<LibroDetalle />} />
                <Route path="/Carrito/" element={<Carrito isOpen={isCartOpen} toggleCart={toggleCart} />} />
                <Route path="/Compra/" element={<Compra />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRouter;