import mongoose from "mongoose";
import ExpenceModel from "../model/user.js";

class ExpanceControllers {
  // Create Post Api Function
  static expanceSave = async (req, res) => {
    const doc = new ExpenceModel(req.body);
    await doc.save();
    res.send(doc);
  };

  // Write Get Api Function
  static expanceGet = async (req, res) => {
    const result = await ExpenceModel.find();
    res.send(result);
  };

  // Write Update Api Function
  static expenceUpdate = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No expance found");

    const price = await req.body;

    const updatedExpence = await ExpenceModel.findByIdAndUpdate(
      _id,
      { ...price, _id },
      { new: true }
    );
    res.send(updatedExpence);
  };

  // Write Delate Api Function
  static expenceDelete = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No Id Found");
    }
    const deleteExpence = await ExpenceModel.findByIdAndDelete(_id, {
      new: true,
    });
    res.send(deleteExpence);
  };

  // Write A Function for Search Api
  static expenceSearch = async (req, res) => {
    const val = req.params.title;
    const textt = val[0].toUpperCase() + val.substring(1);
    const result = await ExpenceModel.find({
      title: textt,
    });
    console.log(req.params);
    console.log(result);
    res.send(result);
  };
}

export default ExpanceControllers;
