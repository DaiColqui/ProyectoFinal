import { Link } from 'react-router-dom'
import '../styles/Generic.css'

function Index() {

  return (
    <>
      <div className="container w-100 py-5">
        <div id="carouselExampleIndicators" class="carousel slide d-flex justify-content-center">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="d-flex justify-content-center w-100">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/Carousel1.jpg" class="d-block w-100" alt="imagen del carrusel 1" />
              </div>
              <div className="carousel-item">
                <img src="/images/Carousel2.jpg" class="d-block w-100" alt="imagen del carrusel 2" />
              </div>
              <div className="carousel-item">
                <img src="/images/Carousel3.jpg" class="d-block w-100" alt="imagen del carrusel 3" />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev opacity-25" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next opacity-25" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="pt-lg-5">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card rounded-4 shadow">
                <div className="d-flex justify-content-center p-3">
                  <img src="/images/Cataratas.jpg" class="card-img-top w-75 rounded-4"
                    alt="Imagen de las cataratas del Iguazu" />
                </div>
                <div className="card-body">
                  <h3 id="titleForm" class="satisfy-regular">Destinos nacionales</h3>
                  <p className="card-text text-center px-4 py-2">Descubre la riqueza cultural y natural de nuestro país con nuestros
                    exclusivos paquetes turísticos. Desde playas paradisíacas hasta majestuosas montañas, ofrecemos
                    experiencias únicas que resaltan la diversidad y belleza de cada rincón.</p>
                  <div className="btn-field">
                    <Link to="/destinosnacionales">
                      <button type="button">Ver opciones</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card rounded-4 shadow">
                <div className="d-flex justify-content-center p-3">
                  <img src="/images/RepublicaDominicana.jpg" class="card-img-top w-75 rounded-4"
                    alt="Imagen de una playa en Republica Dominicana" />
                </div>
                <div className="card-body">
                  <h3 id="titleForm" class="satisfy-regular">Destinos internacionales</h3>
                  <p className="card-text text-center px-4 py-2">Embárcate en una aventura global con nuestros itinerarios diseñados
                    para
                    explorar los destinos más fascinantes del mundo. Desde las vibrantes ciudades europeas hasta exóticas
                    islas tropicales, te garantizamos un viaje inolvidable lleno de descubrimientos y emociones.
                  </p>
                  <div className="btn-field">
                    <Link to="/destinosinternacionales">
                      <button type="button">Ver opciones</button>
                    </Link>
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

export default Index