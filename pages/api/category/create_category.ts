import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongoose";
import Category from "../../../lib/mongoose/modals/Category";

const template = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        // Process a POST request
        const { name, image } = req.body;
        try {
            await connectMongo();
            const alreadyExists = await Category.exists({ name });
            if (alreadyExists) {
                res.status(200).json({
                    message: "Category already exist with similar name",
                });
                return;
            }
            await Category.create({ name, image });
            res.status(200).json({ message: "Category created Successfully" });
            return;
        } catch (e) {
            console.log(e);
            res.status(200).json({
                message:
                    "An unexpected error has occurred, please try again later",
            });
        }
        return;
    }
};

export default template;
