import React, { useState, useContext } from 'react';
import { LibrosContext } from '../Context/LibroContext.jsx';

export const SearchBar = () => {/* Componente para la barra de búsqueda */
    const [query, setQuery] = useState('');/* Estado para la consulta */
    const { filterLibros } = useContext(LibrosContext);/* Se obtiene la función para filtrar los libros */

    const handleSearch = (e) => {/* Función para manejar la búsqueda */
        e.preventDefault();/* Se previene la recarga de la página */
        filterLibros(query);/* Se filtran los libros */
    };
    return (/* Se retorna la barra de búsqueda */
            <div className="Top-Search">
                <div className="Search-container">
                    <form onSubmit={handleSearch}>
                        <input type="text"
                               placeholder="Buscar por título..."
                               className="search"
                               value={query}
                               onChange={(e) => setQuery(e.target.value)}
                            /* Se actualiza el estado con el valor del input */
                        />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
    );
};