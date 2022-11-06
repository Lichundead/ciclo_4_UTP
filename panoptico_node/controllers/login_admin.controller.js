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

exports.find = function (req, res) {
    Admin.find(function (err, admins) {
        res.json(admins);
    });
};

exports.findOne = function (req, res) {
    Admin.findOne({ _id: req.params.id }, function (err, admin) {
        res.json(admin);
    });
};

exports.update = function (req, res) {
    let admin = {
        email: req.body.email,
        contraseña: req.body.contraseña,
    };

    Admin.findOneAndUpdate(
            {id: req.params.id },
            { $set: admin },
        function (err) {
            if (err) {
                console.error(err),
                    (response.exito = false),
                    (response.msg = "Error al modificar al admin");
                res.json(response);
                return;
            }
            (response.exito = true),
                (response.msg = "El admin se modificó correctamente");
            res.json(response);
        }
    );
}

exports.remove = function (req, res) {
    Admin.findOneAndRemove({ id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                (response.exito = false),
                (response.msg = "Error al eliminar al admin");
            res.json(response);
            return;
        }
                (response.exito = true),
                (response.msg = "El admin se eliminó correctamente");
            res.json(response);
    });
};
