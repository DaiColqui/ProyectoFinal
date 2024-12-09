import { Link } from 'react-router-dom';
import '../styles/Generic.css';

function Internacionales() {
    return (
        <>
            <div className="container mt-5 pb-5">
                <div className="pb-5">
                    <h1 id="title">Destinos internacionales</h1>
                </div>

                <div className="row">

                    {/* <!-- Rio de Janeiro --> */}
                    <div className="col-md-4">
                        <div className="card-wrapper shadow">
                            <div className="content">
                                <div className="face-front z-depth-2">
                                    <img src="/images/riojaneiro.jfif" className="rounded-circle m-2" width="150px" height="150px" />
                                    <div className="card-body">
                                        <h3 className="font-weight-bold">Rio de Janeiro</h3>
                                        <h6><p className="font-weight-bold blue-text">USD840</p></h6>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/icons8-cutlery-25.png" /> Media Pensión</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="face-back z-depth-2">
                                    <div className="card-body">
                                        <p>Hotel:</p>
                                        <h4 className="font-weight-bold">Windsor Barra Hotel</h4>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreos con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Media Pensión</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>
                                        <div className="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Rio de Janeiro",
                                                    costPerPassenger: 840
                                                }}
                                            >
                                                <button id="signUp" type="submit">Reservar</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Aruba --> */}
                    <div className="col-md-4">
                        <div className="card-wrapper shadow">
                            <div className="content">
                                <div className="face-front z-depth-2">
                                    <img src="/images/aruba.jfif" className="rounded-circle m-2" width="150px" height="150px" />
                                    <div className="card-body">
                                        <h3 className="font-weight-bold">Aruba</h3>
                                        <h6><p className="font-weight-bold blue-text">USD1.990</p></h6>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/cup-hot.svg" /> Desayuno</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="face-back z-depth-2">
                                    <div className="card-body">
                                        <p>Hotel:</p>
                                        <h4 className="font-weight-bold">Aruba-Beach Resort</h4>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Con desayuno</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>
                                        <div className="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Aruba",
                                                    costPerPassenger: 1990
                                                }}
                                            >
                                                <button id="signUp" type="submit">Reservar</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Punta Cana --> */}
                    <div className="col-md-4">
                        <div className="card-wrapper shadow">
                            <div className="content">
                                <div className="face-front z-depth-2">
                                    <img src="/images/ptacana.jfif" className="rounded-circle m-2" width="150px" height="150px" />
                                    <div className="card-body">
                                        <h3 className="font-weight-bold">Punta Cana</h3>
                                        <h6><p className="font-weight-bold blue-text">USD1.550</p></h6>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/icons8-cutlery-25.png" /> Pensión completa</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="face-back z-depth-2">
                                    <div className="card-body">
                                        <p>Hotel:</p>
                                        <h4 className="font-weight-bold">Tropical Deluxe</h4>
                                        <ul className="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Latam</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Pensión completa </li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>
                                        <div className="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Punta Cana",
                                                    costPerPassenger: 1550
                                                }}
                                            >
                                                <button id="signUp" type="submit">Reservar</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Internacionales;
