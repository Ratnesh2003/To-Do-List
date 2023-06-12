import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../configs/dbConfig.js";

// Register 
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!regex.test(password)) {
            throw new Error("Password must be of minimum 8 characters, must contain an uppercase letter, lowercase letter, a number and a special character.");
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const uuid = uuidv4();

        let newUser = {
            userId: uuid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordHash,
        };

        const savedUser = await User.create(newUser);
        res.status(201).json(savedUser);

    } catch(err) {
        res.status(500).json({error: err.message});
    }
}

// Login
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) return res.status(404).json({message: "User does not exist"});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({message: "Invalid credentials"});

        const token = jwt.sign({id: user.userId}, process.env.JWT_SECRET);
        const { password: _password, ...userInfo } = user.toJSON(); 
        res.status(200).json({token, userInfo});

    } catch(err) {
        res.status(500).json({error: err.message});
    }

}