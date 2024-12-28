import React from "react";
import PageRouter from "./Routes/PageRouter.jsx";
import {Footer} from "./Components/Footer.jsx";
import { LibrosProvider } from './Context/LibroContext.jsx';
import { CartProvider} from "./Context/CartContext.jsx";


function App() {

    return (
        <>
            <LibrosProvider>
                <CartProvider>
                    <PageRouter></PageRouter>
                </CartProvider>
            </LibrosProvider>
            <Footer />
        </>
    );
}

export default App;