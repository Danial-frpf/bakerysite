import axios from "axios";

const createCategory = async (name: string, image: string | ArrayBuffer) => {
    const URL = "http://localhost:3000/api/category/create_category";
    const res = await axios.post(URL, { name, image });
    return res.data;
};

export default createCategory;
