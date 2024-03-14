import mongoose from 'mongoose';
const { randomUUID } = require('crypto');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    _id: {
        type: 'UUID',
        default: () => randomUUID()
    },
    productTitle: { type: String, required: true },
    price: { type: Number, required: "price tag is mandatory" },
    imageUrl: { type: String, required: true, match: /[a-z]/ }
})

{
    toJSON: {
        transform: (doc, obj) => {
            obj.id = obj._id;
            delete obj.__v;
        }
    }
}

const Product = mongoose.model('Products', ProductSchema);


export default Product;