const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config");

const db = require("./modules/Shared/shared.repository")
const app = express();


//Routing Config
var corsOptions = {
  origin: "http://152.67.43.35:4200",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./modules/Shared/shared.routes")(app)

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

module.exports = app;
