import mongoose, { model } from 'mongoose';


let Users;
Users = mongoose.Schema;

let userSchema = new Users({
    firstName: { type: String, required: true },
    lasName: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    ROLE:{
        type: String,default :customer
        enum:
    }

})

const user = mongoose.model('User', userSchema)
export default user;


