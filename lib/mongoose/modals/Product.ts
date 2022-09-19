import mongoose, { model, models } from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    info: String,
    about: String,
    image: String,
});

const Product = models.Product || model("Product", productSchema);

export default Product;
