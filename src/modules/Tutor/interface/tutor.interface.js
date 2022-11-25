const controller = require("../application/tutor.controller");

function TutorController(app) {
  app.get("/api/tutor", controller.TutorFindAll);
  app.get("/api/tutor/{id}", controller.TutorFindById);
  app.post("/api/tutor/{id}", controller.TutorInsert);
  app.patch("/api/tutor/{id}", controller.TutorUpdate);
  app.delete("/api/tutor/{id}", controller.TutorDelete);
}
function TrainingController(app) {
  app.get("/api/training", controller.TrainingFindAll);
  app.get("/api/training/{id}", controller.TrainingFindById);
  app.post("/api/training/{id}", controller.TrainingInsert);
  app.patch("/api/training/{id}", controller.TrainingUpdate);
  app.delete("/api/training/{id}", controller.TrainingDelete);
}

module.exports = function (app) {
  TutorController(app);
  TrainingController(app);
};
