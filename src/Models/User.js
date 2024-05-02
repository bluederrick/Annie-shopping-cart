import mongoose from 'mongoose';
import { ROLES, STATE } from '../utilitiy/constants.js';
import { v4 as uuid } from 'uuid';
const { ACTIVE, NON_ACTIVE, PENDING } = STATE;

const _UserSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: 'FirstName cannot be null',
    trim: true
  },
  lastName: { type: String, required: 'LastName cannot be null', trim: true },
  password: {
    type: String,
    required: 'Password  cannot be null',
    trim: true
  },
  email: {
    type: String,
    required: 'E-mail address cannot be null',
    unique: true
  },
  phoneNumber: { type: Number, required: 'Phone number cannot be null' },
  role: { type: String, default: ROLES.BUYERS },
  verified: { type: Boolean },

  state: { type: String, default: PENDING },
  isAdmin: { type: Boolean, default: false }
});

_UserSchema.statics.isEmailExist = async function (email) {
  if (!email) {
    throw new Error('Please enter a valid email');
  }
  const user = await this.findOne({ email: email });
  if (user) {
    return true;
  }
};

export default mongoose.model('_Users', _UserSchema);
