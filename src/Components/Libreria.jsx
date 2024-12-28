import {OwnButton} from "./OwnButton.jsx";

const Libreria = ({ id, titulo, autor, descripcion, genero, imagen }) => {/* Componente para mostrar un libro */

    return (/* Se retorna el libro */
            <div className="card">
                <img className="card-book-image" src={imagen} alt={titulo}/>
                <OwnButton text="Ver detalle" path={`/Libro/${id}`} />
            </div>
    );
}

export default Libreria;