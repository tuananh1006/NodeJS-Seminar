import usersService from "../services/users.service.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await usersService.login(email, password);

        return res.status(200).json({
            message: "Login success",
            token: result.token,
            user: result.user,
        });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await usersService.register(name, email, password);

        return res.status(201).json({
            message: "Register success",
            user: newUser
        });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const logoutController = (req, res) => {
    return res.json({ message: "Logout successful" });
};

export const changePasswordController = async (req, res) => {
    try {
        const { email, oldPassword, newPassword } = req.body;
        const result = await usersService.changePassword(email, oldPassword, newPassword);

        return res.json({ message: "Password updated!" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        const token = await usersService.forgotPassword(email);

        return res.json({
            message: "Reset token generated",
            resetToken: token   // demo, không gửi email
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const resetPasswordController = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        await usersService.resetPassword(token, newPassword);

        return res.json({ message: "Password reset successful!" });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const getAllUsersController = async (req, res) => {
    try {
        const users = await usersService.getAllUsers();
        return res.status(200).json({
            message: "All users loaded",
            users
        });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};