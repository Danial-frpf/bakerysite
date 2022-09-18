import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import connectMongo from "../../../lib/mongoose";

const authenticateAdmin = (req: NextApiRequest, res: NextApiResponse) => {
    const TOKEN_EXPIRY = "3600s";
    if (req.method === "POST") {
        const { user, password } = req.body;
        if (
            user === process.env.USER_NAME &&
            password === process.env.USER_PASSWORD
        ) {
            const accessToken = jwt.sign(
                { name: user },
                process.env.ACCESS_TOKEN_SECRET!,
                {
                    expiresIn: TOKEN_EXPIRY,
                }
            );
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
