import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  quantity: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
});
// orderItemSchema.virtual('id').get(function () {
//   return this._id.toHexString();
// });
export const orderItem = mongoose.model('OrderItem', orderItemSchema);
