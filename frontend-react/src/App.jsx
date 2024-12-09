import './styles/App.css'
import './styles/Generic.css'
import Navbar from './components/NavbarComponent.jsx'
import Footer from './components/FooterComponent.jsx'
import Index from './pages/Index.jsx'
import Nacionales from './pages/DestinosNacionales.jsx'
import Internacionales from './pages/DestinosInternacionales.jsx'
import Contacto from './pages/Contacto.jsx'
import FormularioReserva from './pages/FormularioReserva.jsx'
import Reservas from './pages/Reservas.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/destinosnacionales' element={<Nacionales />} />
          <Route path='/destinosinternacionales' element={<Internacionales />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/formularioreserva' element={<FormularioReserva />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/reservas' element={<Reservas />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
