
export const Footer = () => {/* Componente para el footer */
    return (/* Se retorna el footer */
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-text">
                            <h3>Relatos de Papel</h3>
                            <p>Av. 44N # 4n-105 - Colombia, Cali</p>
                            <p>Help: info@Relatos_Papel.com</p>
                            <p>© 2024 Relatos de Papel - Todos los derechos reservados</p>
                        </div>
                        <div className='footer-links'>
                            <a href="#" aria-label="Twitter"> <img src="../public/twitter.png" alt="Twitter"/></a>
                            <a href="#" aria-label="Instagram"> <img src="../public/instagram.png" alt="Instagram"/> </a>
                            <a href="#" aria-label="YouTube"> <img src="../public/youtube.png" alt="YouTube"/> </a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
