import express from 'express';
import checkToken from '../middleware/checkToken.js';

const router = express.Router();

router.get('/dashboard', checkToken, (req, res) => {
    res.json({ message: `Welcome to your dashboard, user ${req.user.id}!` });
});

export default router;