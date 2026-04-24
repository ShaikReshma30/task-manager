const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((t, index) => index != id);
  res.json({ message: "Deleted" });
});

app.listen(5001, () => console.log("Server running on port 5001"));
