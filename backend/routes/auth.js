import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Avatar from '../models/Avatar.js';
import 'dotenv/config';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new User({
            firstname,
            lastname,
            email,
            password
        });

        console.log(newUser);

        // Save user in database
        await newUser.save();

        // Get initials
        const avatarSeed = `${firstname.charAt(0)}${lastname.charAt(0)}`;

        // Create new avatar
        const newAvatar = new Avatar({
            user: newUser._id,
            seed: avatarSeed,
        });

        // Save avatar in database
        await newAvatar.save();

        // Create jwt
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(201).json({
            message: 'Registration successful',
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user in database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Use method from user model to check password
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create jtw
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({
            message: 'Login successful',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;