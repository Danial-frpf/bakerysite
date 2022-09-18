import mongoose from "mongoose";

const SUCCESS_MESSAGE = "Mongo connection was successful";
const ERROR_MESSAGE = "Failed to connect to mongo";

const connectMongo = () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        return SUCCESS_MESSAGE;
    } catch (e) {
        return ERROR_MESSAGE;
    }
};

export default connectMongo;
