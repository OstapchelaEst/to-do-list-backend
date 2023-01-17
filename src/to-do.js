import mongoose from "mongoose";

const ToDo = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
});

export default mongoose.model("ToDo", ToDo);
