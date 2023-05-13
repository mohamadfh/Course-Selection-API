const dbConfig = require("../config/db.config.js");
//mongoose.Promise = global.Promise; // what does this do ?!

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.uri;
db.user = require("./user.model.js")(mongoose);
db.student = require("./student.model.js")(mongoose,db.user);
db.professor = require("./professor.model.js")(mongoose,db.user);
db.ITManager = require("./ITManager.model.js")(mongoose,db.user)
db.educationalManager = require("./educationalManager.model.js")(mongoose,db.user)
db.approvedCourse = require("./approvedCourse.model.js")(mongoose)
db.termCourse = require("./termCourse.model.js")(mongoose,db.approvedCourse)
module.exports = db;