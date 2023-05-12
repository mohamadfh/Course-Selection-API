const approvedCourses = require("../controllers/approvedCourse.controller.js");
const termCourses = require("../controllers/termCourse.controller.js");
const db = require("../models");

exports.create = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({ message: "Require EducationalManager Role" });
    }
    if(req.body.courseType === "term"){
        termCourses.create(req,res);
        return;
    }else if (req.body.courseType === "approved"){
        approvedCourses.create(req,res);
        return;
    }else {
        res.status(400).send({ message: "courseType Field can not be empty!" });
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    if(req.query.courseType === "term"){
        termCourses.findAll(req,res);
        return;
    }else if (req.query.courseType === "approved"){
        approvedCourses.findAll(req,res);
        return;
    }else {
        res.status(400).send({ message: "courseType can not be empty!" });
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    if(req.query.courseType === "term"){
        termCourses.findOne(req,res);
        return;
    }else if (req.query.courseType === "approved"){
        approvedCourses.findOne(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type can not be empty!" });
    }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({ message: "Require EducationalManager Role" });
    }
    if(req.body.course_type === "term"){
        termCourses.update(req,res);
        return;
    }else if (req.body.course_type === "approved"){
        approvedCourses.update(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type can not be empty!" });
    }

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({ message: "Require EducationalManager Role" });
    }
    if(req.body.course_type === "term"){
        termCourses.delete(req,res);
        return;
    }else if (req.body.course_type === "approved"){
        approvedCourses.delete(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type can not be empty!" });
    }
};

