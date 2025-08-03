import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.replace("Bearer ","");
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
   const decodedToken = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
   if(!decodedToken){
    return res.status(401).json({ message: "Unauthorized" });
   }
   req.user = decodedToken.userId;
   next();
};
