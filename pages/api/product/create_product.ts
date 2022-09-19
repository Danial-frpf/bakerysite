import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongoose";
import Category from "../../../lib/mongoose/modals/Category";
import Product from "../../../lib/mongoose/modals/Product";

const template = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        // Process a POST request
        const { name, category, info, about, image } = req.body;
        try {
            await connectMongo();
            const categoryExists = await Category.exists({ name: category });
            if (categoryExists) {
                const productExists = await Product.exists({ name });
                if (productExists) {
                    res.status(200).json({
                        message: "Product already exists",
                    });
                    return;
                } else {
                    await Product.create({
                        name,
                        category,
                        info,
                        about,
                        image,
                    });
                    res.status(200).json({
                        message: "Product created successfully",
                    });
                    return;
                }
            } else {
                res.status(200).json({
                    message: `Category ${category} does not exists`,
                });
            }
        } catch (e) {
            res.status(200).json({
                message:
                    "An unexpected error has occurred, please try again later",
            });
        }
        return;
    }
};

export default template;
