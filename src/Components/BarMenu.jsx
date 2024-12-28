import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from "./SearchBar.jsx";
import Carrito from '../Views/Carrito.jsx';

export const BarMenu = ({ isCartOpen, toggleCart }) => {/* Componente para la barra de menú */
    const navigate = useNavigate();/* Hook para la navegación */

    return (/* Se retorna la barra de menú */
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-item" onClick={() => navigate('/Principal/')}>
                    <i className="fa fa-home"></i>
                    Principal
                </div>
                <div className="sidebar-item" onClick={toggleCart}>
                    <i className="fa fa-shopping-cart"></i>
                    Carrito
                </div>
                {isCartOpen && <Carrito isOpen={isCartOpen} toggleCart={toggleCart} />}
                <div className="sidebar-item" onClick={() => navigate('/Principal/')}>
                    <i className="fa fa-support"></i>
                    Soporte
                </div>
                <div className="sidebar-item" onClick={() => navigate('/Principal/')}>
                    <i className="fa fa-info-circle"></i>
                    About Us
                </div>
                <div className="sidebar-search"><SearchBar /></div>
            </div>
        </div>
    );
};