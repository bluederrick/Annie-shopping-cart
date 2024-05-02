import mongoose from 'mongoose';
const { Schema } = mongoose;
import { STATE } from '../utilitiy/constants.js';
const {ACTIVE, NON_ACTIVE, PENDING} = STATE
const orderSchema = new Schema({
  // orderitems is an array of Id's  from the order table
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem',
      required: true
    }
  ],
  // quantity: { type: Number, required: true, default: 1 },
  product: { type: mongoose.Schema.Types.ObjectId, ref: ' product ' },
  shippingAddress: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  zip: { type: String, required: true },
  status: { type: String, required: true, default: PENDING },
  totalPrice: {
    type: Number,
    required: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: '_Users' },
  dateOrdered: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
