import Task from "../models/task.models.js";

const newTask = async (req, res) => {
  console.log(req);
  try {
    const { title, description, due_date } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description not found" });
    }

    const newTask = await Task.create({ title, description, due_date });

    res.status(200).json({
      message: "created a task",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating a task",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    let options = {};
    const tasks = await Task.find({}, null, options);
    res.status(200).json({
      success: true,
      tasks,
      message: "fetched all tasks",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error finding tasks",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, due_date } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Task id is required" });
    }
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (due_date) task.due_date = due_date;
    if (!due_date) task.due_date = null;

    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      updatedTask,
      message: "task updated successfullu",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "task was not updated",
    });
  }
};

const deleteTask = async (req, res) => {
  // get the id from params
  // find task by id
  // delete task

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Task id is required" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      success: true,
      deletedTask,
      message: "task deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "task was not deleted",
    });
  }
};

export { newTask, getTasks, updateTask, deleteTask };
