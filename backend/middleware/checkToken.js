import jwt from 'jsonwebtoken';
import 'dotenv/config';

const checkToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract bearer from token

    if (!token) {
        return res.status(401).json({
            message: 'No token provided',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

export default checkToken;
