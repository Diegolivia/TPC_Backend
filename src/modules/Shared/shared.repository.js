const mongoose = require("mongoose");
const StudRepo = require("../Student/infra/student.repository");
const TutorRepo = require("../Tutor/infra/tutor.repository");
mongoose.Promise = global.Promise;

const db = {
    ...StudRepo,
    ...TutorRepo
  };

db.mongoose = mongoose;
//console.log(db)
module.exports = db;
