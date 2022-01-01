import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  receiptId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },

  status: {
    type: Boolean,
    required: true
  },
  timeStamp: { type: Date }
});
const payment = mongoose.model('Payments', paymentSchema);
export default payment;
