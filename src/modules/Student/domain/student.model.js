const mongoose = require("mongoose");

const Career = mongoose.model(
  "career",
  new mongoose.Schema({
    career_id: Number,
    career_name: String,
  })
);
const Career_course = mongoose.model(
  "career_course",
  new mongoose.Schema({
    ccourse_id: Number,
    ccareer_id: Number,
  })
);
const Student = mongoose.model(
  "student",
  new mongoose.Schema({
    studend_id: Number,
    cycle_number: Number,
    career_id: Number,
  })
);

module.exports = {
  Career,
  Career_course,
  Student,
};
