import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
    },
    Email: {
        type: String,
    },
    Phone: {
        type: String,
    },
},{
    timestamps: true
});

const userModel = new mongoose.model("User", userSchema);

export default userModel;
