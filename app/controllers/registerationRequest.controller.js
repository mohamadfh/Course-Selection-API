const db = require("../models");
const TermCourse = db.termCourse;
const RegistrationRequests = db.registerationRequests;

exports.addRegisterCourse = (req, res) => {
    const course_id = req.params.id;
    const user_id = req.user.id;
    RegistrationRequests.findOneAndUpdate({student: user_id},{ $push: { courses: course_id } })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot add course with id=${course_id}. maybe request obj was not found`
                });
            } else res.send({ message: "course was added successfully" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error adding course with id=" + course_id
            });
        });
};
exports.deleteRegisterCourse = (req, res) => {
    const course_id = req.params.id;
    const user_id = req.user.id;
    RegistrationRequests.findOneAndUpdate({student: user_id},{ $pull: { courses: course_id } })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot add course with id=${course_id}. maybe request obj was not found`
                });
            } else res.send({ message: "course was added successfully" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error adding course with id=" + course_id
            });
        });
};

exports.findAllRegistered = (req, res) => {
    const user_id = req.user.id;
    RegistrationRequests.findOne({student: user_id})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `no courses were found in registration`
                });
            } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while retrieving registration"
            });
        });
};

exports.validateRequest = (req, res) => {
    const id = req.params.id;
    RegistrationRequests.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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