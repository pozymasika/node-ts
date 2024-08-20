import express from "express";
import type { User } from "./types.ts";

const app = express();

const user: User = {
  id: 2,
  name: "Jane Doe",
  email: "jane@example.com",
};

app.get("/", (req, res) => {
  res.send(`Hello, ${user.name}!`);
});

app.listen(3003, () => {
  console.log("Server is running on http://localhost:3003");
});
