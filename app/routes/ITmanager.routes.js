
const { authJwt } = require("../middlewares");

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const professors = require("../controllers/professor.controller.js");
    const students = require("../controllers/student.controller.js");
    const educationalManagers = require("../controllers/educationalManager.controller.js");
    const approvedCourses = require("../controllers/approvedCourse.controller.js");
    const TermCourses = require("../controllers/termCourse.controller.js");
    const router = require("express").Router();

    router.post("/student",[authJwt.verifyToken, authJwt.isITManager], students.create);
    router.put("/student/:id" ,[authJwt.verifyToken, authJwt.isITManager], students.update);
    router.delete("/student/:id" ,[authJwt.verifyToken, authJwt.isITManager], students.delete);
    router.get("/student/:id" ,[authJwt.verifyToken, authJwt.isITManager], students.findOne);
    router.get("/student/" ,[authJwt.verifyToken, authJwt.isITManager], students.findAll);

    router.post("/professor",[authJwt.verifyToken, authJwt.isITManager], professors.create);
    router.put("/professor/:id" ,[authJwt.verifyToken, authJwt.isITManager], professors.update);
    router.delete("/professor/:id" ,[authJwt.verifyToken, authJwt.isITManager], professors.delete);
    router.get("/professor/:id" ,[authJwt.verifyToken, authJwt.isITManager], professors.findOne);
    router.get("/professor/" ,[authJwt.verifyToken, authJwt.isITManager], professors.findAll);

    router.post("/manager",[authJwt.verifyToken, authJwt.isITManager], educationalManagers.create);
    router.put("/manager/:id" ,[authJwt.verifyToken, authJwt.isITManager], educationalManagers.update);
    router.delete("/manager/:id" ,[authJwt.verifyToken, authJwt.isITManager], educationalManagers.delete);
    router.get("/manager/:id" ,[authJwt.verifyToken, authJwt.isITManager], educationalManagers.findOne);
    router.get("/manager/" ,[authJwt.verifyToken, authJwt.isITManager], educationalManagers.findAll);

    app.use('/admin',router);
};