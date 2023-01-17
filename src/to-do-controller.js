import toDoService from "./to-do-service.js";

class Controller {
  async createTask(req, res) {
    try {
      const task = await toDoService.create(req.body);
      return res.json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllTsks(req, res) {
    try {
      const tasks = await toDoService.AllTasks();
      return res.json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateTask(req, res) {
    try {
      const newTask = await toDoService.update(req.body);
      console.log(newTask);
      return res.json(newTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteTask(req, res) {
    try {
      const deletedTask = await toDoService.delete(req.body);
      return res.json(deletedTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new Controller();
