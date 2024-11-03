import mongoose from "mongoose";

export default function connectMongoDb() {
    function mongoConnectWrapper() {
        mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log("Failed to connect to MongoDB" + err);
        })
    }
    mongoConnectWrapper();
}