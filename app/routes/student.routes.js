
const { authJwt } = require("../middlewares");
const students = require("../controllers/student.controller");

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const professors = require("../controllers/professor.controller.js");
    const students = require("../controllers/student.controller.js");
    const approvedCourses = require("../controllers/approvedCourse.controller.js");
    const TermCourses = require("../controllers/termCourse.controller.js");
    const router = require("express").Router();

    router.get("/student/:id" ,[authJwt.verifyToken], students.findOne);
    router.get("/students" ,[authJwt.verifyToken], students.findAll);
    router.put("/student/:id" ,[authJwt.verifyToken], students.update);

    app.use('/',router);
};