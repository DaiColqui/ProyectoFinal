import { Link } from 'react-router-dom'
import '../styles/Generic.css'

function Nacionales() {
    return (
        <>
            <div class="container mt-5 pb-5">
                <div class="pb-5">
                    <h1 id="title">Destinos nacionales</h1>
                </div>

                <div class="row">

                    {/* <!-- Jujuy --> */}
                    <div class="col-md-4 py-3">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/AJujuy.png" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Jujuy</h3>
                                        <h6>
                                            <p class="font-weight-bold blue-text">USD650</p>
                                        </h6>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/icons8-cutlery-25.png" /> Media Pensión</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="face-back z-depth-2">
                                    <div class="card-body">
                                        <p>Hotel:</p>
                                        <h4 class="font-weight-bold">Howard Johnson Hotel</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreos con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Media Pensión</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>

                                        <div class="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Jujuy",
                                                    costPerPassenger: 650
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

                    {/* <!-- Buenos Aires --> */}
                    <div class="col-md-4">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/ABsAs.png" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Buenos Aires</h3>
                                        <h6>
                                            <p class="font-weight-bold blue-text">USD376</p>
                                        </h6>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/cup-hot.svg" /> Desayuno</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="face-back z-depth-2">
                                    <div class="card-body">
                                        <p>Hotel:</p>
                                        <h4 class="font-weight-bold">Bristol</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Con desayuno</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>
                                        <div class="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Buenos Aires",
                                                    costPerPassenger: 376
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

                    {/* <!-- Rio Negro --> */}
                    <div class="col-md-4">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/ABarilo.png" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Rio Negro</h3>
                                        <h6>
                                            <p class="font-weight-bold blue-text">USD1.550</p>
                                        </h6>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/airplane.svg" /> Aéreos</li>
                                            <li><img src="/images/building.svg" /> Alojamiento</li>
                                            <li><img src="/images/icons8-cutlery-25.png" /> Pensión completa</li>
                                            <li><img src="/images/car-front.svg" /> Traslados</li>
                                            <li><img src="/images/bandaid.svg" /> Asistencia al Viajero</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="face-back z-depth-2">
                                    <div class="card-body">
                                        <p>Hotel:</p>
                                        <h4 class="font-weight-bold">Nahuel Huapi</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Latam</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Pensión completa </li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <p><small>El Precio es en dólares por persona. Tiene incluidas las excursiones detalladas.<br />
                                            Más información</small><br />
                                        </p>

                                        <div class="btn-field">
                                            <Link
                                                to="/FormularioReserva"
                                                state={{
                                                    destination: "Rio Negro",
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
    )
}

export default Nacionales