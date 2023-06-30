const db = require("../models");
const TermCourse = db.termCourse;
const PreRegistrationRequests = db.preRegisterationRequests;

exports.addpreRegisterCourse = (req, res) => {
    const course_id = req.params.id;
    const user_id = req.user.id;
    PreRegistrationRequests.findOneAndUpdate({student: user_id},{ $push: { courses: course_id } })
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
exports.deletepreRegisterCourse = (req, res) => {
    const course_id = req.params.id;
    const user_id = req.user.id;
    PreRegistrationRequests.findOneAndUpdate({student: user_id},{ $pull: { courses: course_id } })
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

exports.findAllPreRegistered = (req, res) => {
    const user_id = req.user.id;
    PreRegistrationRequests.findOne({student: user_id})
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

