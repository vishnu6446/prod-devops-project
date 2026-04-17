const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Production CI/CD Running 🚀");
});

app.listen(3000, () => console.log("Server running"));