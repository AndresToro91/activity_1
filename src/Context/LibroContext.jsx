import React, { createContext, useState, useEffect } from 'react';
import { useLibros } from '../Hooks/useLibros.jsx';
//Contexto de libros
export const LibrosContext = createContext();/* Se crea el contexto de libros */

export const LibrosProvider = ({ children }) => {/* Componente para el proveedor de libros */

    const libros = useLibros();/* Se obtienen los libros */
    const [filteredLibros, setFilteredLibros] = useState(libros);/* Estado para los libros filtrados */

    useEffect(() => {/* Efecto para actualizar los libros filtrados */
        setFilteredLibros(libros);
    }, [libros]);

    const filterLibros = (query) => {/* Función para filtrar los libros */
        if (query) {
            setFilteredLibros(libros.filter(libro => libro.titulo.toLowerCase().includes(query.toLowerCase())));
            /* Se filtran los libros por el título */
        } else {
            setFilteredLibros(libros);/* Se actualizan los libros filtrados */
        }
    };

    return (/* Se retorna el proveedor de libros */
        <LibrosContext.Provider value={{ libros, filteredLibros, filterLibros }}>
            {children}
        </LibrosContext.Provider>
    );
};
