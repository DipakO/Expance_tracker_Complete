import express from "express";
import ExpanceControllers from "../controllers/user.js";

const Router = express.Router();

Router.post("/", ExpanceControllers.expanceSave);
Router.put("/:id", ExpanceControllers.expenceUpdate);
Router.delete("/:id", ExpanceControllers.expenceDelete);
// Router.get("/id", ExpanceControllers.expenceSearchDate);
Router.get("/", ExpanceControllers.expanceGet);

Router.get("/:title", ExpanceControllers.expenceSearch);

export default Router;
