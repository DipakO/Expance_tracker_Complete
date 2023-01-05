import mongoose from "mongoose";
import ExpenceModel from "../model/user.js";

class ExpanceControllers {
  static expanceGet = async (req, res) => {
    res.send(result);
  };

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
}

export default ExpanceControllers;
