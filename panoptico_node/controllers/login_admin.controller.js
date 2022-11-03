const Admin= require('../models/login_admin.model');
let response = {
    msg: "",
    exito: false,
};

exports.create = function (req, res) {
    let admin = new Admin({      
        email: req.body.email,
        contraseña: req.body.contraseña,
    });

    admin.save(function (err) {
        if (err) {
            console.error(err),
            (response.exito = false),
            (response.msg = "Error al guardar el admin");
        res.json(response);
        return;
    }

        (response.exito = true),
            (response.msg = "El admin se guardó correctamente");
        res.json(response);
    });
};
