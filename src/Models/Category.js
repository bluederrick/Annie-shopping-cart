import mongoose from "mongoose"
const { randomUUID } = require('crypto');



const Category = mongoose.model('productCategory', mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
    description: { type: String, required: true },
    post_type: { type: String, default: 'product_catgory' },
    parentID: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', default: null },
})
)


export default Category;