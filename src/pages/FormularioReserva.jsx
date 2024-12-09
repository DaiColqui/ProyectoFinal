import React, { useState } from "react";
import '../styles/Generic.css';

function FormularioReserva() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    destino: '',
    pasajeros: 1,
  });

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [reservas, setReservas] = useState([]); // Estado para guardar las reservas en la tabla

  // Captura los cambios en los campos
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: id === "pasajeros" ? parseInt(value, 10) : value,
    });
  };

  // Simulación de envío de formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    
    let formErrors = { ...errors };

    if (!formData.email.includes('@')) {
      formErrors.email = 'El correo electrónico no es válido.';
    } else {
      formErrors.email = '';
    }

    if (!formData.name.trim()) {
      formErrors.name = 'Nombre inválido.';
    } else {
      formErrors.name = '';
    }

    if (!formData.lastName.trim()) {
      formErrors.lastName = 'Apellido inválido.';
    } else {
      formErrors.lastName = '';
    }

    if (!formData.phone.trim()) {
      formErrors.phone = 'Teléfono inválido.';
    } else {
      formErrors.phone = '';
    }

    setErrors(formErrors);

    if (!Object.values(formErrors).some((error) => error !== '')) {
      console.log('Datos enviados: ', formData);
      
      // Agregar datos a la tabla dinámica
      setReservas([...reservas, formData]);

      alert("Formulario enviado con éxito.");

      // Limpiar formulario
      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        destino: '',
        pasajeros: 1,
      });
    } else {
      alert('Corrige los errores antes de enviar el formulario.');
    }
  };

  return (
    <div className="containerForm">
      <div className="form-content">
        <h1 id="titleForm" className="satisfy-regular py-2">Formulario de Reserva</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* Nombre */}
            <div className="input-field">
              <input
                type="text"
                placeholder="Nombre"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <span className="error">{errors.name}</span>}

            {/* Apellido */}
            <div className="input-field">
              <input
                type="text"
                placeholder="Apellido"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <span className="error">{errors.lastName}</span>}

            {/* Correo Electrónico */}
            <div className="input-field">
              <input
                type="email"
                placeholder="Correo Electrónico"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error">{errors.email}</span>}

            {/* Teléfono */}
            <div className="input-field">
              <input
                type="text"
                placeholder="Teléfono"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}

            {/* Destino */}
            <div className="input-field">
              <label htmlFor="destino">Destino</label>
              <select
                id="destino"
                value={formData.destino}
                onChange={handleChange}
              >
                <option value="">Selecciona un destino</option>
                <option value="Jujuy">Jujuy</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Aruba">Aruba</option>
                <option value="Punta Cana">Punta Cana</option>
              </select>
            </div>

            {/* Cantidad de Pasajeros */}
            <div className="input-field">
              <label htmlFor="pasajeros">Cantidad de Pasajeros</label>
              <select
                id="pasajeros"
                value={formData.pasajeros}
                onChange={handleChange}
              >
                {Array.from({ length: 9 }, (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="btn-field">
            <button id="signUp" type="submit">Enviar Reserva</button>
          </div>
        </form>

        {/* Tabla para mostrar los datos */}
        <div className="tabla-container">
        <h2 id="titleForm" className="satisfy-regular py-2">Datos de Reserva</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Destino</th>
                <th>Cantidad de Pasajeros</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva, index) => (
                <tr key={index}>
                  <td>{reserva.name}</td>
                  <td>{reserva.lastName}</td>
                  <td>{reserva.email}</td>
                  <td>{reserva.phone}</td>
                  <td>{reserva.destino}</td>
                  <td>{reserva.pasajeros}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormularioReserva;
