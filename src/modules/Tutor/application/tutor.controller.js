const db = require("../infra/tutor.repository");

exports.TutorInsert = async (req, res) => {
  let val = Student(req.body);
  res.status(200).send(val);
};

exports.TutorUpdate = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TutorDelete = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TutorFindAll = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TutorFindById = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TrainingInsert = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TrainingUpdate = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TrainingDelete = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TrainingFindAll = async (req, res) => {
  res.status(200).send("OK!");
};

exports.TrainingFindById = async (req, res) => {
  res.status(200).send("OK!");
};
