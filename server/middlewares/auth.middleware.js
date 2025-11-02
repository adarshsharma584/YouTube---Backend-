import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        if (!payload) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = payload;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
