import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String
    },
    admin: Boolean,
    phone: Number,
    password: String
});

export default model('User', userSchema);