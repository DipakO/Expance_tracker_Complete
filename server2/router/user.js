import express from "express";
import ExpanceControllers from "../controllers/user.js";

const Router = express.Router();

Router.put("/:id", ExpanceControllers.expenceUpdate);
Router.get("/", ExpanceControllers.expanceGet);

export default Router;
