import { Router } from "express";
import {getShirtsController, addShirtController, updateShirtController, deleteShirtController, getShirtByIDController } from "../controllers/shirts.controller.js";
const shirtsRouter = Router();

//Xem san pham
shirtsRouter.get("/", getShirtsController);

//Xoa san pham
shirtsRouter.delete("/:id", deleteShirtController);

//Them san pham
shirtsRouter.post("/", addShirtController);

//Sua san pham 
shirtsRouter.put("/:id", updateShirtController);

export default shirtsRouter;
