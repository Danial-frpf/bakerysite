import axios from "axios";

const createProduct = async (
    name: string,
    category: string,
    info: string,
    about: string,
    image: string | ArrayBuffer
) => {
    const URL = "http://localhost:3000/api/product/create_product";
    const res = await axios.post(URL, { name, category, info, about, image });
    return res.data;
};

export default createProduct;
