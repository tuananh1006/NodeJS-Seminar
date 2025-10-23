import { Router } from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/users.controllers.js";

const usersRouter = Router();

// Login
usersRouter.post("/login", loginController);

// Logout
usersRouter.post("/logout", logoutController);

// Register
usersRouter.post("/register", registerController);

export default usersRouter;
