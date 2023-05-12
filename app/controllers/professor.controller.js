const db = require("../models");
const Professor = db.professor;

exports.create = (req, res) => {

    if (!req.body.user_id || !req.body.password) {
        res.status(400).send({ message: "user_id and password fields cant be empty" });
        return;
    }

    const professor = new Professor({
        department : req.body.department,
        major : req.body.major,
        rank : req.body.rank,
        name : req.body.name,
        user_id : req.body.user_id,
        password : req.body.password,
        email : req.body.email,
        phone_no : req.body.phone_no
    });
    professor
        .save(professor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating document."
            });
        });
};


exports.findAll = (req, res) => {
    if (req.user.userType !== 'ITManager' && req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require Manager Role"})
        return;
    }
    Professor.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving documents."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;
    Professor.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    if (req.user.id !== id || req.user.userType !== 'Professor') {
        res.status(403).send({message: "not authorized to do this"})
        return;
    }
    Professor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update document with id=${id}. Maybe document was not found!`
                });
            } else res.send({ message: "document was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating document with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Professor.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete document with id=${id}. Maybe document was not found!`
                });
            } else {
                res.send({
                    message: "document was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete document with id=" + id
            });
        });
};