import {useEffect, useState} from 'react';

export const useLibros = () => {/* Hook personalizado para obtener los libros */

    const [libros, setLibros] = useState([]);/* Estado para los libros */

    useEffect(() => {/* Simulación de una petición a una API */
        setTimeout(() => {
            setLibros([
                {
                    id: "1",
                    titulo: 'El principito',
                    autor: 'Antoine de Saint-Exupéry',
                    descripcion: 'Un cuento filosófico sobre un joven príncipe que explora varios planetas.',
                    genero: 'Ficción',
                    precio: 10.99,
                    imagen: '/img/Principito.jpg'
                },
                {
                    id: "2",
                    titulo: 'El señor de los anillos',
                    autor: 'J.R.R. Tolkien',
                    descripcion: 'Una épica fantasía sobre la lucha contra el mal en la Tierra Media.',
                    genero: 'Fantasía',
                    precio: 15.99,
                    imagen: '/img/anillos.jpg'
                },
                {
                    id: "3",
                    titulo: 'Cien años de soledad',
                    autor: 'Gabriel García Márquez',
                    descripcion: 'La historia de la familia Buendía en el pueblo ficticio de Macondo.',
                    genero: 'Realismo mágico',
                    precio: 12.99,
                    imagen: '/img/100.jpg'
                },
                {
                    id: "4",
                    titulo: 'Don Quijote de la Mancha',
                    autor: 'Miguel de Cervantes',
                    descripcion: 'Las aventuras de un hidalgo que pierde la cordura y se convierte en caballero andante.',
                    genero: 'Novela',
                    precio: 9.99,
                    imagen: '/img/Quijote.jpg'
                },
                {
                    id: "5",
                    titulo: 'Harry Potter y la piedra filosofal',
                    autor: 'J.K. Rowling',
                    descripcion: 'El inicio de las aventuras de un joven mago en la escuela de magia Hogwarts.',
                    genero: 'Fantasía',
                    precio: 14.99,
                    imagen: '/img/HP.jpg'
                },
                {
                    id: "6",
                    titulo: 'El código Da Vinci',
                    autor: 'Dan Brown',
                    descripcion: 'Un thriller que sigue a Robert Langdon en la resolución de un misterio religioso.',
                    genero: 'Thriller',
                    precio: 13.99,
                    imagen: '/img/El_codigo.jpg'
                },
                {
                    id: "7",
                    titulo: 'El alquimista',
                    autor: 'Paulo Coelho',
                    descripcion: 'La historia de un joven pastor en busca de su leyenda personal.',
                    genero: 'Ficción',
                    precio: 11.99,
                    imagen: '/img/El_alquimista.jpg'
                },
                {
                    id: "8",
                    titulo: 'El nombre del viento',
                    autor: 'Patrick Rothfuss',
                    descripcion: 'La vida y aventuras de Kvothe, un joven prodigio en la magia.',
                    genero: 'Fantasía',
                    precio: 16.99,
                    imagen: '/img/Nombre_del_viento.jpg'
                },
                {
                    id: "9",
                    titulo: 'La sombra del viento',
                    autor: 'Carlos Ruiz Zafón',
                    descripcion: 'Un joven descubre un libro misterioso que cambia su vida.',
                    genero: 'Misterio',
                    precio: 12.49,
                    imagen: '/img/La_sombra_del_viento.jpg'
                },
                {
                    id: "10",
                    titulo: 'El retrato de Dorian Gray',
                    autor: 'Oscar Wilde',
                    descripcion: 'La historia de un joven cuya apariencia permanece inmutable mientras su retrato envejece.',
                    genero: 'Ficción',
                    precio: 10.49,
                    imagen: '/img/Dorian.jpg'
                },
                {
                    id: "11",
                    titulo: 'La insoportable levedad del ser',
                    autor: 'Milan Kundera',
                    descripcion: 'Una exploración filosófica de la vida y el amor en la Checoslovaquia comunista.',
                    genero: 'Filosofía',
                    precio: 13.49,
                    imagen: '/img/insoportable.jpg'
                },
                {
                    id: "12",
                    titulo: '1984',
                    autor: 'George Orwell',
                    descripcion: 'Una distopía sobre un régimen totalitario que controla todos los aspectos de la vida.',
                    genero: 'Ciencia ficción',
                    precio: 14.49,
                    imagen: '/img/1984.png'
                },
            ]);
        }, 2500);
    }, []);

    return libros;
}