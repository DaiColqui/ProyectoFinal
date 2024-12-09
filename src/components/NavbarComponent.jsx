import { Link } from 'react-router-dom'
import '../styles/Generic.css'

function Navbar() {

    return (
        <>
            <header className="bg-dark">
                <div className="container">
                    <div className="d-flex align-items-center py-1">
                        <nav className="navbar navbar-expand-lg navbar-dark w-100 justify-content-between ">
                            <div>
                                <Link to="/">
                                    <img class="logo" src="/images/logo.jpg" alt="logo" />
                                </Link>
                            </div>
                            <div class="navbar-nav">
                                <Link className="nav-link"  to="/">Inicio</Link>
                                <Link className="nav-link" to="/destinosnacionales">Destinos nacionales</Link>
                                <Link className="nav-link" to="/destinosinternacionales">Destinos internacionales</Link>
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                                <Link to="./FormularioReserva"> <img className="logo" src="/images/boleto.png" alt="boleto" /></Link>
                            </div>                         
                           
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar