import express from "express";
import ExpanceControllers from "../controllers/user.js";

const Router = express.Router();

Router.post("/", ExpanceControllers.expanceSave);
Router.get("/", ExpanceControllers.expanceGet);

export default Router;
