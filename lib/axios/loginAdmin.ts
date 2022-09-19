import axios from "axios";

const loginAdmin = async (user: string, password: string) => {
    const URL = "http://localhost:3000/api/authenticateAdmin";
    const res = await axios.post(URL, { user, password });
    return res.data;
};

export default loginAdmin;
