const express = require("express");
const path = require("path");
const messagesRouter = require("./router/index");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
