
    import {Link} from "react-router-dom";
    import useRedirection from "../Hooks/useRedirection.jsx";
    import "../Styles/Landing.css";

    function Landing() {/*Componente que muestra la página de inicio de la aplicación. */

        useRedirection("/Principal", 3000); // Redireccionamos a la vista principal en 3 segundos

        return (/* se retorna  la estructura de la página de inicio */
            <div className="landing">
                <div className="landing-container">
                    <img src={'/img/inicio.png'} alt="inicio" className="landing-img"/>
                    <Link to={"/Principal"}>
                        <h1 className="landing-title">Bienvenido a Relatos de Papel</h1>
                    </Link>
                </div>
            </div>
        );
    }

    export default Landing;
