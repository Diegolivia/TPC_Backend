const db = require("../infra/student.repository");
const Student = db.student;
const Carrerr = db.career;

exports.UsrInsert = async (req, res) => {
  let val = Student(req.body);
  res.status(200).send(val);
};

exports.UsrUpdate = async (req, res) => {
  res.status(200).send("OK!");
};

exports.UsrDelete = async (req, res) => {
  res.status(200).send("OK!");
};

exports.UsrFindAll = async (req, res) => {
  res.status(200).send("OK!");
};

exports.UsrFindById = async (req, res) => {
  res.status(200).send("OK!");
};

exports.CarInsert = async (req, res) => {
  res.status(200).send("OK!");
};

exports.CarUpdate = async (req, res) => {
  res.status(200).send("OK!");
};

exports.CarDelete = async (req, res) => {
  res.status(200).send("OK!");
};

exports.CarFindAll = async (req, res) => {
  res.status(200).send("OK!");
};

exports.CarFindById = async (req, res) => {
  res.status(200).send("OK!");
};
