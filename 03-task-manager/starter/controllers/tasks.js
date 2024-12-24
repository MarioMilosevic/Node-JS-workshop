const getAllTasks = (req, res) => {
    res.send('get all items')
}

const createTask = (req, res) => {
  res.send("create task");
};
const getTasks = (req, res) => {
  res.send("get item");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};


module.exports = {
    getAllTasks
}