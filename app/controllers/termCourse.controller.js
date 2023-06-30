const db = require("../models");
const TermCourse = db.termCourse;
const PreRegisterationRequests = db.preRegisterationRequests
exports.create = (req, res) => {

    // if (!req.body.name || !req.body.unit_no || !req.body.prerequisites || !req.body.corequisite
    //     || !req.body.class_time || !req.body.exam_time && !req.body.exam_location || !req.body.professor || !req.body.capacity || !req.body.term
    // ) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }

    const termCourse = new TermCourse({
        name : req.body.name,
        prerequisites : req.body.prerequisites,
        corequisite : req.body.corequisite,
        unit_no : req.body.unit_no,
        class_time: req.body.class_time,
        exam_time: req.body.exam_time,
        exam_location: req.body.exam_location,
        professor: req.body.professor,
        capacity: req.body.capacity,
        term: req.body.term,
        major : req.body.major

    });
    termCourse
        .save(termCourse)
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
    const majorquery = req.query.major;
    const filters = {}
    if (majorquery) {
        filters.major = majorquery
    }
    TermCourse.find(filters).populate('prerequisites').populate('corequisite').populate('professor')
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
    TermCourse.findById(id).populate('professor').populate('prerequisites').populate('corequisite')
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

    TermCourse.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    TermCourse.findByIdAndRemove(id)
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

exports.findPreRegisterationRequests = (req, res) => {
    const id = req.params.id;
    let requests = []
    PreRegisterationRequests.find()
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                for(const req of data) {
                    if (req.courses.includes(id)){
                        requests.push(req)
                    }
                }
                res.status(200).send(requests);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

exports.findRegisterationRequests = (req, res) => {
    const id = req.params.id;
    let requests = []
    RegisterationRequests.find()
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found document with id " + id });
            else{
                for(const req of data) {
                    if (req.courses.includes(id)){
                        requests.push(req)
                    }
                }
                res.status(200).send(requests);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving document with id=" + id });
        });
};

