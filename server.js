import { app } from "./app.js";

app.get("/", (req, res) => {
  res.send("<h1>Working fine</h1>");
});

app.route("/users").get((req, res, next) => {
  res.status(200).json({
    users: [],
    success: false,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
