const express = require("express");
const tasks = require('./routes/routes');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config()

const port = 3000

app.use(express.json())

app.get('/hello', ((req, res) => {
    res.end("Hello")
}))

app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, (req, res) => {
      console.log("listening on port 3000");
    });
  } catch (error) {
    console.error(error)
  }
}

start()