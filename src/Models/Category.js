import mongoose from 'mongoose';
const { randomUUID } = require('crypto');

const Category = mongoose.model(
  'productCategory',
  mongoose.Schema({
    title: { type: String, required: true },
    icon:{type: String, required: true}
    // color: { type: String, requried: true },
    // slug: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    // description: { type: String, required: true },
    // post_type: { type: String, default: 'product_catgory' },
    parentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory',
      default: null
    }
  })
);

export default Category;
