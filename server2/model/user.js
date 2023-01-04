import mongoose from "mongoose";

const expenceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
});

const ExpenceModel = mongoose.model("expenceData", expenceSchema);

export default ExpenceModel;
