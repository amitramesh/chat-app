import User from "../models/user.model.js";

export const SignUp = async (req, res) => {
    res.status(200).json({ message: "User has register" });
}

export const Login = async (req, res) => {
    res.status(200).json({ message: "user sign in" });
}

export const Logout = async (req, res) => {
    res.status(200).json({ message: "User logout" })
}