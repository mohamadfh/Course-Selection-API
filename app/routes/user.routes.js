// module.exports = app => {
//     const users = require("../controllers/user.controller.js");
//     const professors = require("../controllers/professor.controller.js");
//     const students = require("../controllers/student.controller.js");
//     const educationalManagers = require("../controllers/educationalManager.controller.js");
//     const approvedCourses = require("../controllers/approvedCourse.controller.js");
//     const TermCourses = require("../controllers/termCourse.controller.js");
//
//     var router = require("express").Router();
//
//     router.post("/", users.create);
//
//     router.get("/", users.findAll);
//
//     app.use('/api/users', router);
// };