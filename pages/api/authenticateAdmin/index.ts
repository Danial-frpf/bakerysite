import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const authenticateAdmin = (req: NextApiRequest, res: NextApiResponse) => {
    const ACCESS_TOKEN_SECRET = "secret";
    const USER_NAME = "ultrapoweridpass123";
    const USER_PASSWORD = "ultrapoweridpass123";
    if (req.method === "POST") {
        const { user, password } = req.body;
        if (user === USER_NAME && password === USER_PASSWORD) {
            const accessToken = jwt.sign({ name: user }, ACCESS_TOKEN_SECRET, {
                expiresIn: "60s",
            });
            res.status(200).json({
                message: "Login was successful",
                accessToken,
            });
        } else {
            res.status(200).json({ message: "Wrong username or password" });
        }
        return;
    }
};

export default authenticateAdmin;
