import express from "express";
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("dotabase!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
