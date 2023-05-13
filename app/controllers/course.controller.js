const approvedCourses = require("../controllers/approvedCourse.controller.js");
const termCourses = require("../controllers/termCourse.controller.js");
const db = require("../models");

exports.create = (req, res) => {
    if (req.user.userType !== 'EducationalManager') {
        res.status(403).send({ message: "Require EducationalManager Role" });
    }
    if(req.body.course_type === "TermCourse"){
        termCourses.create(req,res);
        return;
    }else if (req.body.course_type === "ApprovedCourse"){
        approvedCourses.create(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type Field can not be empty!" });
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    if(req.query.course_type === "TermCourse"){
        termCourses.findAll(req,res);
        return;
    }else if (req.query.course_type === "ApprovedCourse"){
        approvedCourses.findAll(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type can not be empty!" });
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    if(req.query.course_type === "TermCourse"){
        termCourses.findOne(req,res);
        return;
    }else if (req.query.course_type === "ApprovedCourse"){
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
    if(req.body.course_type === "TermCourse"){
        termCourses.update(req,res);
        return;
    }else if (req.body.course_type === "ApprovedCourse"){
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
    if(req.body.course_type === "TermCourse"){
        termCourses.delete(req,res);
        return;
    }else if (req.body.course_type === "ApprovedCourse"){
        approvedCourses.delete(req,res);
        return;
    }else {
        res.status(400).send({ message: "course_type can not be empty!" });
    }
};

