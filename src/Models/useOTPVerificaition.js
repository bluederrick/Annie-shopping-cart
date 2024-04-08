import mongoose from 'mongoose';

const _Otp = mongoose.model("Otp", mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: [true, 'Each review must have an associated user!'],
    }, // auto geerated ID in user table
    email: {
        type: String,
        required: 'E-mail address cannot be null',
        unique: true,
    },
    otp: {
        type: String
    },
    createdAT: { type: Date },
    expiredAt: { type: Date }

})
)


export default _Otp;