import databaseService from "./database.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const usersService = {
  login: async (email, password) => {
    const user = await databaseService.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("Wrong password");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { user, token };
  },

  register: async (name, email, password) => {
    const exists = await databaseService.findUserByEmail(email);
    if (exists) throw new Error("Email already exists");

    const hashed = await bcrypt.hash(password, 10);

    return await databaseService.createUser({
      name,
      email,
      password: hashed
    });
  },

  changePassword: async (email, oldPassword, newPassword) => {
    const user = await databaseService.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    const ok = await bcrypt.compare(oldPassword, user.password);
    if (!ok) throw new Error("Old password wrong");

    const hashed = await bcrypt.hash(newPassword, 10);
    await databaseService.updatePassword(email, hashed);

    return true;
  },

  forgotPassword: async (email) => {
    const user = await databaseService.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    const token = Math.random().toString(36).substring(2, 15);

    await databaseService.saveResetToken(email, token);
    return token;
  },

  resetPassword: async (token, newPassword) => {
    const user = await databaseService.findByResetToken(token);
    if (!user) throw new Error("Invalid token");

    const hashed = await bcrypt.hash(newPassword, 10);

    await databaseService.updatePassword(user.email, hashed);
    await databaseService.clearResetToken(user.email);

    return true;
  },

  getAllUsers: async () => {
    return await databaseService.getAllUsers();
  }
};

export default usersService;
