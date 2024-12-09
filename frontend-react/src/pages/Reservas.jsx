import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/Generic.css';

function Reservas() {
    const [reservasList, setReservas] = useState([]);

    const getReservas = () => {
        Axios.get("http://localhost:3001/reservas")
            .then((response) => {
                setReservas(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener las reservas", error);
            });
    };

    const handlePassengerChange = (index, newCount) => {
        const updatedReservas = [...reservasList];
        updatedReservas[index].cantidad_pasajeros = newCount;
        updatedReservas[index].precio_total = newCount * updatedReservas[index].precio_unitario;
        setReservas(updatedReservas);
    };

    const deleteReserva = (id) => {
        Axios.delete(`http://localhost:3001/deleteReserva/${id}`)
            .then(() => {
                getReservas();
                alert('Reserva eliminada');
            })
            .catch((error) => {
                console.error("Error al eliminar la reserva", error);
            });
    };

    const saveChanges = () => {
        reservasList.forEach((reserva) => {
            if (reserva.hasOwnProperty("cantidad_pasajeros")) {
                Axios.put("http://localhost:3001/updateReserva", {
                    id: reserva.id,
                    cantidad_pasajeros: reserva.cantidad_pasajeros,
                    precio_total: reserva.precio_total,
                })
                    .then(() => {
                        console.log('Reserva actualizada');
                        getReservas();
                    })
                    .catch((err) => {
                        console.error('Error al actualizar la reserva', err);
                    });
            }
        });
    };

    useEffect(() => {
        getReservas();
    }, []);

    return (
        <div className="py-5">
            <h1 id="title">Listado de Reservas</h1>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Destino</th>
                            <th>Cantidad de Pasajeros</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservasList.map((reserva, index) => (
                            <tr key={reserva.id}>
                                <td>{reserva.nombre}</td>
                                <td>{reserva.apellido}</td>
                                <td>{reserva.email}</td>
                                <td>{reserva.telefono}</td>
                                <td>{reserva.destino}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={reserva.cantidad_pasajeros}
                                        onChange={(e) => handlePassengerChange(index, e.target.value)}
                                        min="1"
                                        max="10"
                                    />
                                </td>
                                <td>{reserva.precio_unitario} $</td>
                                <td>{reserva.precio_total} $</td>
                                <td>
                                    <button onClick={() => deleteReserva(reserva.id)} className="delete-btn">
                                        <i className="fa-solid fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="save-changes-btn">
                    <button onClick={saveChanges}>Guardar Cambios</button>
                </div>
            </div>
        </div>
    );
}

export default Reservas;
