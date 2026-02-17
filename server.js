const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.post("/messages", (req, res) => {
  fs.readFile("./messages.json", "utf-8", (err, content) => {
    const arr = JSON.parse(content);
    arr.push(req.body);
    fs.writeFile("./messages.json", JSON.stringify(arr), (err) => {
      if (err) res.send("Something failed");
      else res.send("OK");
    });
  });

  console.log(req.body);
  res.send("Ok");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
