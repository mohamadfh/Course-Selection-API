
const { authJwt } = require("../middlewares");

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const professors = require("../controllers/professor.controller.js");
    const students = require("../controllers/student.controller.js");
    const approvedCourses = require("../controllers/approvedCourse.controller.js");
    const TermCourses = require("../controllers/termCourse.controller.js");
    const router = require("express").Router();

    router.get("/professor/:id" ,[authJwt.verifyToken], professors.findOne);
    router.get("/professors" ,[authJwt.verifyToken], professors.findAll);

    app.use('/',router);
};