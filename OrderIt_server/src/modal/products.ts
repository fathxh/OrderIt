import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const productSchema = new schema({
    shop:String,
    productname: {
        type: String
    },
    description: {
        type: String
    },
    price: Number,
    photo: String,
    time: String
});

export default model('Product', productSchema);