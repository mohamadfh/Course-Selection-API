
const { authJwt } = require("../middlewares");
const courses = require("../controllers/course.controller");
const terms = require("../controllers/term.controller");

module.exports = app => {
    const terms = require("../controllers/term.controller.js");
    const router = require("express").Router();

    router.get("/term" ,[authJwt.verifyToken], terms.findAll);
    router.get("/term/:id" ,[authJwt.verifyToken], terms.findOne);
    router.delete("/term/:id" ,[authJwt.verifyToken], terms.delete);
    router.post("/term",[authJwt.verifyToken], terms.create);
    router.put("/term/:id" ,[authJwt.verifyToken], terms.update);
    router.delete("/term/:id/preregistration" ,[authJwt.verifyToken], terms.deletePreCourse);
    router.get("/term/:id/preregistration" ,[authJwt.verifyToken], terms.findAllPreCourses);
    router.post("/term/:id/preregistration" ,[authJwt.verifyToken], terms.addPreCourse);
    router.delete("/term/:id/registration" ,[authJwt.verifyToken], terms.deleteCourse);
    router.get("/term/:id/registration" ,[authJwt.verifyToken], terms.findAllCourses);
    router.post("/term/:id/registration" ,[authJwt.verifyToken], terms.addCourse);
    router.get("/term/:id/preregistrationrequests" ,[authJwt.verifyToken], terms.findAllPreCourseRequests);


    app.use('/',router);

};