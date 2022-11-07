const Login_admin = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

exports.login =function(req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Login_admin.findOne({ email: req.body.email, pass: hashedpass}, function(err, email){
        let response ={
        token: null
        }

        if (usuario !== null) {
            response.token = jwt.sign({
                id: email._id,
                email: email.usuario
            }, "__recret__",
            { expiresIn: '12h' }
            )
        }
        res.json(response);
    })
}
