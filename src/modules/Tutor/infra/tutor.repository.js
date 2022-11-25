const mongoose = require("mongoose");
const tutorModel = require("../domain/tutor.model");

const db = {};

db.training=tutorModel.Training
db.training_tutor=tutorModel.Training_tutor
db.tutors=tutorModel.Tutor

module.exports = db;
