const db = require("../models");
const Term = db.term;

exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: "name cant be empty" });
        return;
    }


    const term = new Term({
        name : req.body.name,
        registeredUsers : [],
        registeredCourses : [],
        preRegisterationRequests : [],
        registerationRequests : []
    });
    term
        .save(term)
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
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    Term.find()
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
    Term.findById(id)
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
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Term.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    const id = req.params.id;

    Term.findByIdAndRemove(id)
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

exports.addPreCourse = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    if (!req.body) {
        return res.status(400).send({
            message: "Data can not be empty!"
        });
    }

    const id = req.params.id;

    Term.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                data.preRegisteredCourses.push(req.body.course_id)
                Term.findByIdAndUpdate(id, data, { useFindAndModify: false })
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
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

exports.addCourse = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Term.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                data.registeredCourses.push(req.body.course_id)
                Term.findByIdAndUpdate(id, data, { useFindAndModify: false })
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
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

exports.findAllPreCourses = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    const id = req.params.id
    Term.findById(id)
        .then(data => {
            res.send(data.preRegisteredCourses);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving documents."
            });
        });
};
exports.findAllCourses = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    const id = req.params.id

    Term.findById(id)
        .then(data => {
            res.send(data.registeredCourses);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving documents."
            });
        });
};


exports.deleteCourse = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Term.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                const courseIndex = data.registeredCourses.indexOf(req.body.course_id);

                if (courseIndex > -1) {
                    data.registeredCourses.splice(courseIndex, 1);
                }
                Term.findByIdAndUpdate(id, data, { useFindAndModify: false })
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
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};
exports.deletePreCourse = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Term.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                const courseIndex = data.preRegisteredCourses.indexOf(req.body.course_id);

                if (courseIndex > -1) {
                    data.preRegisteredCourses.splice(courseIndex, 1);
                }
                Term.findByIdAndUpdate(id, data, { useFindAndModify: false })
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
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

exports.findAllPreCourseRequests = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({message: "Require educational Manager Role"})
        return;
    }
    const id = req.params.id
    Term.findById(id)
        .then(data => {
            res.send(data.preRegisterationRequests);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving documents."
            });
        });
};
exports.findAllCourseRequests = (req, res) => {
    const id = req.params.id
    Term.findByIdAndUpdate(id)
        .then(data => {
            res.send(data.registerationRequests);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving documents."
            });
        });
};