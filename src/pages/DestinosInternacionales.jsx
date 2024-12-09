import '../styles/Generic.css'
import { Link } from 'react-router-dom';

function Internacionales() {
    return (
        <>
            <div class="container mt-5 pb-5">
                <div class="pb-5">
                    <h1 id="title" class="satisfy-regular">Destinos internacionales</h1>
                </div>

                <div class="row">

                    {/* <!-- Rio de Janeiro --> */}
                    <div class="col-md-4">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/riojaneiro.jfif" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Rio de Janeiro</h3>
                                        <h6>
                                            <p class="font-weight-bold blue-text">USD840</p>
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
                                        <h4 class="font-weight-bold">Windsor Barra Hotel</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreos con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Media Pensión</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <h6 class="font-weight-bold" />Tarifas no incluyen el 3.5% de gastos administrativos. <br />
                                        El Precio en dólares por persona tiene incluido las excursiones.<br />Más información <br />
                                        <div class="btn-field">
                                        <Link to="/FormularioReserva"><button id="signUp" type="button">Reservar</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Aruba --> */}
                    <div class="col-md-4">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/aruba.jfif" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Aruba</h3>
                                        <h6><p class="font-weight-bold blue-text">USD1.990</p>
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
                                        <h4 class="font-weight-bold">Aruba-Beach Resort</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Copa Airlines</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Con desayuno</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <h6 class="font-weight-bold" />Tarifas no incluyen el 3.5% de gastos administrativos. <br />
                                        El Precio en dólares por persona tiene incluido las excursiones.<br />Más información <br />
                                        <div class="btn-field">
                                        <Link to="/FormularioReserva"><button id="signUp" type="button">Reservar</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Punta Cana --> */}
                    <div class="col-md-4">
                        <div class="card-wrapper shadow">
                            <div class="content">
                                <div class="face-front z-depth-2">
                                    <img src="/images/ptacana.jfif" class="rounded-circle m-2" width="150px" height="150px" />
                                    <div class="card-body">
                                        <h3 class="font-weight-bold">Punta Cana</h3>
                                        <h6><p class="font-weight-bold blue-text">USD1.550</p></h6>
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
                                        <h4 class="font-weight-bold">Tropical Deluxe</h4>
                                        <ul class="list-unstyled">
                                            <li><img src="/images/file-earmark-check.svg" /> Aéreo con Latam</li>
                                            <li><img src="/images/file-earmark-check.svg" /> 7 noches</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Pensión completa </li>
                                            <li><img src="/images/file-earmark-check.svg" /> Traslados</li>
                                            <li><img src="/images/file-earmark-check.svg" /> Asistencia al viajero</li>
                                        </ul>
                                        <h6 class="font-weight-bold" />Tarifas no incluyen el 3.5% de gastos administrativos. <br />
                                        El Precio en dólares por persona tiene incluido las excursiones.<br />Más infomación <br />
                                        <div class="btn-field">
                                        <Link to="/FormularioReserva"><button id="signUp" type="button">Reservar</button></Link>
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

export default Internacionales