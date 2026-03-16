import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/db/utli.js';

export const SignUp = async (req, res) => {

    const { fullName, email, password } = req.body;
    console.log("Email ", email)
    if (password.length < 6) {
        res.status(200).json({ message: "Password length should be maximum 6" });
    }

    const user = await User.findOne({ email: email });

    if (user) {
        res.status(200).json({ message: "User already exist." })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        fullName: fullName,
        email: email,
        password: hashPassword
    });
    if (newUser) {
      generateToken(newUser.id, res);
      await newUser.save()
      res.status(201).json({ message: "User has register" });
    }
}

export const Login = async (req, res) => {
    res.status(200).json({ message: "user sign in" });
}

export const Logout = async (req, res) => {
    res.status(200).json({ message: "User logout" })
}