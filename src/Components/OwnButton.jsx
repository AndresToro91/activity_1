import React from 'react';
import {useNavigate} from 'react-router-dom';

export const OwnButton = ({text, path, onClick}) => {/* Componente para un botón personalizado */
    const navigate = useNavigate();/* Hook para la navegación */
    const handleClick = () => {/* Función para manejar el evento click */
        if (onClick) {
            onClick();
        }
        if (path) {
            navigate(path);
        }

    };
    return (/* Se retorna el botón */
        <button className ="Own-btn"  onClick={handleClick}>{text}</button>
    );
};