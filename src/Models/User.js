import mongoose from 'mongoose';
import { ROLES, STATE } from '../utilitiy/constants';
import { v4 as uuid } from 'uuid';
const { ACTIVE, NON_ACTIVE, PENDING } = STATE;
const _User = mongoose.model(
  'Users',
  mongoose.Schema({
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
  })
);

_User.statics.isEmailExist = async () => {
    if(!email){
         throw new Error ("Please enter a valid email");
    }
  try {
    const user = await this.findOne({ email });
    if (user) return true;
  } catch (errro) {
    console.log( `An error occured while find the email : ` error.message);
   return false;
}

};

// const _User = mongoose.Schema({

//     _id: { type: String },
//     firstName: { type: String, required: 'FirstName cannot be null', trim: true },
//     lastName: { type: String, required: 'LastName cannot be null', trim: true },
//     password: { type: String, required: 'Password  cannot be null', trim: true },
//     email: {
//         type: String,
//         required: 'E-mail address cannot be null',
//         unique: true
//     },
//     phoneNumber: { type: Number, required: 'Phone number cannot be null' },
//     role: { type: String, default: ROLES.BUYERS }

// })

export default _User;
