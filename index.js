const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.get("/api/products", (req, res) => {
  res.json({
    data: [{ id: 1, name: "Quan HT11" }, { id: 2, name: "Quan HT12" }]
  });
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
