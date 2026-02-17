const express = require("express");
const user = require("./data.json");
const port = 3000;

const app = express();

app.use(express.static(__dirname));

function getData() {
  const data = fetch("./data.json")
    .then((res) => res.json())
    .then((data) => data);
  console.log("Ovo je data", data);
}

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
