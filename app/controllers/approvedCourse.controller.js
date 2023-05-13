const db = require("../models");
const ApprovedCourse = db.approvedCourse;

exports.create = (req, res) => {

    if (!req.body.name || !req.body.unit_no) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const approvedCourse = new ApprovedCourse({
        name : req.body.name,
        prerequisites : req.body.prerequisites,
        corequisite : req.body.corequisite,
        unit_no : req.body.unit_no,
        major : req.body.major
    });
    approvedCourse
        .save(approvedCourse)
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
    ApprovedCourse.find(filters).populate('prerequisites').populate('corequisite')
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

    ApprovedCourse.findById(id).populate('prerequisites').populate('corequisite')
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

    ApprovedCourse.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    ApprovedCourse.findByIdAndRemove(id)
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