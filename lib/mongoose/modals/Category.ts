import mongoose, { model, models } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    image: String,
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
