import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const authUser = async (req, res, next) => {
    // Try to get token from Authorization header (standard approach)
    let token = req.headers.authorization?.split(' ')[1];

    // Fallback to checking req.headers.token (your original approach)
    if (!token) {
        token = req.headers.token;
    }

    console.log('Received token:', token);

    // Check if token exists
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: "No token provided, please login again" 
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by ID from decoded token
        const user = await userModel.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found, please login again" 
            });
        }

        // Attach user to request object
        req.user = user;
        next();

    } catch (error) {
        console.error('Authentication error:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                success: false, 
                message: "Session expired, please login again" 
            });
        }
        return res.status(401).json({ 
            success: false, 
            message: "Invalid token, please login again" 
        });
    }
};

export default authUser;