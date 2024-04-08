import mongoose from "mongoose"
const { randomUUID } = require('crypto');
const { } = mongoose;
const { Schema } = mongoose;

const ProductSchema = new Schema({
    _id: {
        type: 'UUID',
        default: () => randomUUID()
    },
    productTitle: { type: String, required: true },
    price: { type: Number, required: "price tag is mandatory" },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true, match: /[a-z]/ },
    review: {
        type: String,
        required: [true, 'A review must have a review!!!'],
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
    },
    // countInStock: {
    //     type: Number, required: 'count in stock is require', min: 0, max: 20
    // },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productCategory'
    },
    dateCreated: { type: Date, default: Date.now() }
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