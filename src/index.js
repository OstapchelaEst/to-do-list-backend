import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const DB_URL = `mongodb+srv://admin:admin_app@cluster0.etgahy6.mongodb.net/?retryWrites=true&w=majority`;
const PORT = 3000;

const app = express();

mongoose.set("strictQuery", false);

app.use(express.json()); // по умолчанию express не умеет чиать JSON, но благодаря этой функции может
app.use("", router); // в кавычках можно вписать любойпуть по которому будет доступен эндпоинт

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("SERVER STARTED ON PORT " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
