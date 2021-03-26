const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("3000 portundan dinleniyor");
});

app.get("/", (req, res) => {
  res.send("Zekiye Doğru");
});

app.get("/whoami", (req, res) => {
  res.json({
    firstname: "Zekiye",
    lastname: "Doğru",
  });
});

app.post("/alert", (req, res) => {
  res.json(req.body);
});
