import {useEffect}  from "react";
import {useNavigate} from "react-router-dom";


const useRedirection = (path, delay) => {/* Hook personalizado para redireccionar a una ruta */
    const navigate = useNavigate();
    useEffect(() => {/* Se ejecuta la redirección después de un tiempo */

        setTimeout(() => {/* Se redirecciona a la ruta */
            navigate(path);
        }, delay);
    });
}

export default useRedirection;