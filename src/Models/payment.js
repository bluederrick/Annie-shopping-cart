mport mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  refenrence: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Number,
    required: true
  }
  timeStamp: true
});


export default = mongoose.model('paymentModel',paymentSchema)
