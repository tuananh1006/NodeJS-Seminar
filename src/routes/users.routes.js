import { Router } from "express";
import {
  loginController,
  logoutController,
  registerController,
  getAllUsersController,
  changePasswordController,
  resetPasswordController,
  forgotPasswordController
} from "../controllers/users.controllers.js";

const usersRouter = Router();

// Login
usersRouter.post("/login", loginController);

// Logout
usersRouter.post("/logout", logoutController);

// Register
usersRouter.post("/register", registerController);

// Change_password
usersRouter.post("/change-password", changePasswordController);
usersRouter.post("/reset-password", resetPasswordController);

// Forgot_password
usersRouter.post("/forgot-password", forgotPasswordController);

//get_user_account
usersRouter.get("/get_account", getAllUsersController);

export default usersRouter;
