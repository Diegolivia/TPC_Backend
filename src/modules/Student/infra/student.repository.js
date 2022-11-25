const mongoose = require("mongoose");
const studmdl = require("../domain/student.model");

const db = {};

db.career = studmdl.Career
db.career_course = studmdl.Career_course
db.student = studmdl.Student

module.exports = db;
