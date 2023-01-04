import ExpenceModel from "../model/user.js";

class ExpanceControllers {
  static expanceSave = async (req, res) => {
    const doc = new ExpenceModel(req.body);
    await doc.save();
    res.send(doc);
  };

  static expanceGet = async (req, res) => {
    const result = await ExpenceModel.find();
    res.send(result);
  };
}

export default ExpanceControllers;
