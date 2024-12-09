import React, { useState, useEffect } from 'react';
import '../styles/Generic.css';

function FormularioReserva() {
    // Definir el estado para cada campo del formulario
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
    });


    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
    });

    // Manejador de cambios para los inputs
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    // Validaciones de los campos
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

    // Validar todos los campos antes de enviar el formulario
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

        // Actualizar los errores en el estado
        setErrors(formErrors);

        // Si no hay errores, enviamos el formulario
        if (!Object.values(formErrors).some((error) => error !== '')) {
            console.log('Formulario enviado:', formData);
            alert('¡Mensaje enviado!');
        }


    };

    return (
        <div className="containerForm">
            <div className="form-content">
                <h1 id="titleForm" className="satisfy-regular py-2">Formulario de Reserva</h1>
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
                            <i className="fa-solid fa-pencil"></i>
                            <input
                                placeholder="Teléfono"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.phone && <span className="error">{errors.phone}</span>} 
                    </div>

                    <div className="btn-field">
                        <button id="signUp" type="submit">Enviar Reserva</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioReserva;
