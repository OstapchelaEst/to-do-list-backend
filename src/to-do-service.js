import ToDo from "./to-do.js";

class ToDoService {
  async create(task) {
    const newTask = await ToDo.create(task);
    return newTask;
  }

  async AllTasks() {
    const tasks = await ToDo.find();
    return res.json(tasks);
  }

  async update(task) {
    if (!task._id) {
      throw new Error(" Не указан id");
    }
    const newTask = await ToDo.findByIdAndUpdate(task._id, task, {
      new: true,
    });
    return newTask;
  }

  async delete(task) {
    if (!task._id) {
      throw new Error(" Не указан id");
    }
    const deletedTask = await ToDo.findByIdAndDelete(task._id);
    return deletedTask;
  }
}

export default new ToDoService();
