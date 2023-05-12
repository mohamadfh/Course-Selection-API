const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.user = decoded;
        next();
    });
};

isProfessor = (req, res, next) => {
    User.findById(req.user.id).then((user) => {
        if (req.user.userType === "Professor"){
            next()
        }else {
            res.status(403).send({ message: "Require Professor Role" });
        }
    }).catch((err) => {
        res.status(500).send({ message: err });

    })
};

isStudent = (req, res, next) => {
    User.findById(req.user.id).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (req.user.userType === "student"){
            next()

        }else {
            res.status(403).send({ message: "Require student Role" });

        }
    });
};
isEducationalManager = (req, res, next) => {
    User.findById(req.user.id).then((user) => {
        if (req.user.userType === "EducationalManager"){
            next()
        }else {
            res.status(403).send({ message: "Require EducationalManager Role" });
        }
    }).catch((err) => {
        res.status(500).send({ message: err });
    })
};

isITManager = (req, res, next) => {
    User.findById(req.user.id).then((user) => {
        if (req.user.userType === "ITManager"){
            next()
        }else {
            res.status(403).send({ message: "Require ITManager Role" });
        }
    }).catch((err) => {
        res.status(500).send({ message: err });
    })
};

isStudent = (req, res, next) => {
    User.findById(req.user.id).then((user) => {
        if (req.user.userType === "Student"){
            next()
        }else {
            res.status(403).send({ message: "Require Student Role" });
        }
    }).catch((err) => {
        res.status(500).send({ message: err });
    })
};
const authJwt = {
    verifyToken,
    isStudent,
    isEducationalManager,
    isProfessor,
    isITManager
};
module.exports = authJwt;


