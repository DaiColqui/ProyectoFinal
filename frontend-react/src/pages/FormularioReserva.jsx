import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import '../styles/Generic.css';

function FormularioReserva() {
    const location = useLocation();
    const { destination, costPerPassenger } = location.state || { destination: '', costPerPassenger: 0 };

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        passengers: 1,
    });

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
    };

    const validateInput = (input) => {
        if (!input.trim()) return false;
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+( [A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+)*$/;
        return regex.test(input);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formErrors = { ...errors };

        if (!validateEmail(formData.email)) {
            formErrors.email = 'El correo electrónico no es válido. Ingrese un correo válido, por ejemplo: email@ejemplo.com';
        } else {
            formErrors.email = '';
        }

        if (!validateInput(formData.name)) {
            formErrors.name = 'Nombre no válido. El campo del nombre no puede estar vacío o iniciar con espacios. Ingrese un nombre válido, por ejemplo: "Lionel Andrés".';
        } else {
            formErrors.name = '';
        }

        if (!validateInput(formData.lastName)) {
            formErrors.lastName = 'Apellido no válido. El campo del apellido no puede estar vacío o iniciar con espacios. Ingrese un apellido válido, por ejemplo: "Messi".';
        } else {
            formErrors.lastName = '';
        }

        if (!validatePhone(formData.phone)) {
            formErrors.phone = 'Número no válido. El campo de teléfono sólo acepta números.';
        } else {
            formErrors.phone = '';
        }

        setErrors(formErrors);

        if (!Object.values(formErrors).some((error) => error !== '')) {
            add();
        } else {
            console.log("Formulario no válido, no se enviará.");
        }
    };

    const totalCost = formData.passengers * costPerPassenger;

    const add = () => {
        Axios.post("http://localhost:3001/create", {
            nombre: formData.name,
            apellido: formData.lastName,
            email: formData.email,
            telefono: formData.phone,
            destino: destination,
            cantidad_pasajeros: formData.passengers,
            precio_unitario: costPerPassenger,
            precio_total: totalCost
        }).then(() => {
            console.log('Formulario enviado:', formData);
            alert('Reserva realizada exitosamente. Pronto nos pondremos en contacto. ¡Gracias ' + formData.name + '!');
        }).catch((err) => {
            console.error("Error al registrar la reserva", err);
            alert("Hubo un error al registrar la reserva.");
        });
    }

    return (
        <div className="containerForm">
            <div className="form-content">
                <h1 id="titleForm">Formulario de Reserva</h1>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <span className="error">{errors.name}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-user-tag"></i>
                            <input
                                type="text"
                                placeholder="Apellido"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-phone"></i>
                            <input
                                placeholder="Teléfono - característica + número, ej: 0341 155123456"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.phone && <span className="error">{errors.phone}</span>}

                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Destino</th>
                                        <th>Cantidad de pasajeros</th>
                                        <th>Precio unitario</th>
                                        <th>Precio total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{destination}</td>
                                        <td>
                                            <input
                                                type="number"
                                                id="passengers"
                                                value={formData.passengers}
                                                onChange={handleChange}
                                                min="1"
                                                max="10"
                                            />
                                        </td>
                                        <td>{costPerPassenger} $</td>
                                        <td>{totalCost} $</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="btn-field">
                        <button type="submit">Enviar Reserva</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioReserva;