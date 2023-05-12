const { authJwt } = require("../middlewares");
const courses = require("../controllers/course.controller");

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const professors = require("../controllers/professor.controller.js");
    const students = require("../controllers/student.controller.js");
    const approvedCourses = require("../controllers/approvedCourse.controller.js");
    const TermCourses = require("../controllers/termCourse.controller.js");
    const courses = require("../controllers/course.controller.js");
    const router = require("express").Router();

    router.post("/course",[authJwt.verifyToken], courses.create);
    router.put("/course/:id" ,[authJwt.verifyToken], courses.update);
    router.delete("/course/:id" ,[authJwt.verifyToken], courses.delete);
    router.get("/course/:id" ,[authJwt.verifyToken], courses.findOne);
    router.get("/courses" ,[authJwt.verifyToken], courses.findAll);

    app.use('/',router);
};