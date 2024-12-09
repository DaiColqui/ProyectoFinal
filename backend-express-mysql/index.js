const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "grupin"
})

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const destino = req.body.destino;
    const cantidad_pasajeros = req.body.cantidad_pasajeros;
    const precio_unitario = req.body.precio_unitario;
    const precio_total = req.body.precio_total;

    db.query('INSERT INTO reservas(nombre,apellido,email,telefono,destino,cantidad_pasajeros,precio_unitario,precio_total) VALUES(?,?,?,?,?,?,?,?)', [nombre, apellido, email, telefono, destino, cantidad_pasajeros, precio_unitario, precio_total],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Reserva guardada en bd.")
            }
        }
    );
}

);

app.listen(3001, () => {
    console.log("    Corriendo en el puerto")
})