import mongoose from 'mongoose';
import { number } from 'yup';

let user;
user = mongoose.schema;

let Userschema = new user({
    firstName:{type:String , required:true},
    lasName:{type:String , required:true},
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    PhoneNumber: { type: Number, required: true }

})

export default Userschema;