module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  require("../Student/interface/student.interface")(app)
  require("../Tutor/interface/tutor.interface")(app)
};
