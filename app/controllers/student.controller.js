const db = require("../models");
const Student = db.student;

exports.create = (req, res) => {

    if (!req.body.department && !req.body.gpa && !req.body.entry_term && !req.body.degree
        && !req.body.major && !req.body.entry_year && !req.body.name
        && !req.body.user_id && !req.body.password && !req.body.email && !req.body.phone_no) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const student = new Student({
        department : req.body.department,
        major : req.body.major,
        gpa : req.body.gpa,
        entry_term : req.body.entry_term,
        entry_year : req.body.entry_year,
        degree : req.body.degree,
        name : req.body.name,
        user_id : req.body.user_id,
        password : req.body.password,
        email : req.body.email,
        phone_no : req.body.phone_no
    });
    student
        .save(student)
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

    Student.find()
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
    Student.findById(id)
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

    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    Student.findByIdAndRemove(id)
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