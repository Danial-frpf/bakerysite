import axios from "axios";

const createCategory = async (name: string, image: string) => {
    const URL = "";
    const res = await axios.post(URL, { name, image });
    return res.data;
};

export default createCategory;
