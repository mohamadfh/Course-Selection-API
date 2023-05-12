const config = require("../config/auth.config");
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");
const User = db.user;


exports.signin = (req, res) => {
    console.log(User)
    User.findOne({
        user_id: req.body.user_id

    }).then( (user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = (user.password === req.body.password)

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({id: user._id, userType: user.userType}, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user._id,
            accessToken: token
        });
        }
    ).catch((err) =>{
        console.log(err)
        res.status(500).send({ message: err.message });

        }
    )
};