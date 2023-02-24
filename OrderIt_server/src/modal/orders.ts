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
    totalprice: Number,
    price: Number,
    ready:Boolean,
    count:Number
});

export default model('Order', orderSchema);