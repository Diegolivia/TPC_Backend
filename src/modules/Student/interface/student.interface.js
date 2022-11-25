const controller = require("../application/student.controller");

function StudentController(app) {
  app.get("/api/students", controller.UsrFindAll);
  app.get("/api/students/{id}", controller.UsrFindById);
  app.post("/api/students/{id}", controller.UsrInsert);
  app.patch("/api/students/{id}", controller.UsrUpdate);
  app.delete("/api/students/{id}", controller.UsrDelete);
}
function CareerController(app) {
  app.get("/api/careers", controller.CarFindAll);
  app.get("/api/careers/{id}", controller.CarFindById);
  app.post("/api/careers/{id}", controller.CarInsert);
  app.patch("/api/careers/{id}", controller.CarUpdate);
  app.delete("/api/careers/{id}", controller.CarDelete);
}

module.exports = function (app) {
  StudentController(app);
  CareerController(app);
};
