//Importing App
var app = require("./server.js")

// starting the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});