
const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query(
        "INSERT INTO users SET ?", // Ingreso en mi tabla usuarios
        { user: user, rol: rol }, // campos capturados en el formulario user y rol
        (error, results) => {     // manejo del error
            if (error) {
                console.log(error);
            } else {
                res.redirect("/"); // si no hay error re-dirijo a la vista principal.
            }
        })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query(
        'UPDATE users SET ? WHERE id = ?',
        [{ user:user, rol:rol }, id],
        (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect("/");
            }
        })
}
