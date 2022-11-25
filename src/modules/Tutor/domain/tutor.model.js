const mongoose = require("mongoose");

const Training = mongoose.model(
  "training",
  new mongoose.Schema({
    training_id: Number,
    coordinator_id: Number,
  })
);
const Training_tutor = mongoose.model(
  "training_tutor",
  new mongoose.Schema({
    training_id: Number,
    tutor_id: Number,
    assistance: [{ tutoratt: Boolean }],
  })
);
const Tutor = mongoose.model(
  "tutor",
  new mongoose.Schema({
    tutor_id: Number,
    faculty_id: Number,
  })
);

module.exports = {
  Training,
  Training_tutor,
  Tutor,
};
