const express = require("express");
const tasks = require('./routes/tasks');
const app = express();

const port = 3000

app.use(express.json())

app.get('/hello', ((req, res) => {
    res.end("Hello")
}))

app.use('/api/v1/tasks', tasks)

app.listen(port, (req, res) => {
  console.log("listening on port 3000");
//   res.end("Mario");
});
