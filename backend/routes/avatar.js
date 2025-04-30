import express from 'express';
import Avatar from '../models/Avatar.js';
import checkToken from '../middleware/checkToken.js';

const router = express.Router();

router.get('/me', checkToken, async (req, res) => {
    try {
        const avatar = await Avatar.findOne({ user: req.user.id });

        if (!avatar) {
        return res.status(404).json({ message: 'Avatar not found' });
        }

        res.json(avatar);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
