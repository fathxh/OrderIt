import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const orderSchema = new schema({
    customer: {
        type: String
    },
    item: {
        type: String
    },
    shop:String,
    phone:Number,
    price: Number,
    ready:Boolean
});

export default model('Order', orderSchema);