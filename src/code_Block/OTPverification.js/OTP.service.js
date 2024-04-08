import _Otp from "../../Models/useOTPVerificaition";
import { GenerateOTP } from "../../Generic services/generateOTP";
import bcrypt from 'bcrypt'
import { transporter } from "../../Generic services/sendMail"
import { sendEmail } from "../../Generic services/EmailService";
import _User from "../../Models/User";
import { config } from "dotenv";
import exco from "../../utilitiy/helper";
const { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_HEADER } = config
const salt = 10;
let Email;
let id;

//  send OTP TO RECIVER E-MAIL
export const sendOTPVerfication = async (data) => {
    const isEmailExist = _User.findOne({ email: data.email });
    if (isEmailExist == false) {
        return {
            status: "Error wroong E-mail",
            message: "Please enter your  email address "
        }

    }

    const otp = GenerateOTP(6);
    if (!otp) {
        return {
            title: "OTP failure",
            message: "something went wrong",
        }
    }


    Email = data.email;
    id = data.id;

    //  test your transporter 
    transporter.verify(exco())

    // GENERATE MAIL OPTIONS:
    const mailOptions = {
        from: EMAIL_ADDRESS,
        to: Email, //
        subject: `${EMAIL_HEADER}:- Email Verification`, // Subject line
        text: "?", // plain text body
        html: `<p>Enter  <b> ${otp}</b> in the app to verify your email address and complete signup, Note this code expires in 10 minutes</p>`, // html body
    }

    // HASH OPT CODE :
    const hashedOTP = await bcrypt.hashSync(otp, salt);

    // SAVE OTP TO DATABASE
    const newOTPVerification = new _Otp({
        id: id,
        email: Email,
        otp: hashedOTP,
        createdAt: Date.now(),
        expiredAt: Date.now() + 3600000,
    })
    const savedVerifiedOTP = await newOTPVerification.save()

    // send mail to recipent


    const mail = transporter.sendMail(mailOptions, function (error, info) {
        if (!mail) {
            console.log(mail)
            console.log(error.message, "derrick is wating for the message");
            return error;
        }
        return {
            Title: "Pending",
            message: "Verification otp sent",
            data: {
                id,
                Email
            }
        }
        // transporter.close();
    });


    console.log(mail)

    const sendMail = async (transporter, mail) => {
        console.log("derrick")
        try {
            await transporter.sendMail(mailOptions)

            console.log(`mail has been sent to successfully`)
        } catch (e) {
            console.log(e);
        }
    };

    const transportedData = await transporter.sendMail(mailOptions)
    console.log(transportedData, "transport")
    if (!transportedData) {
        console.log({
            status: "PENDING",
            message: "verification OTP sent",
            data: {
                id,
                Email
            }
        })
        console.log({
            status: "Failed",
            message: "verification OTP not sent",
            data: {
                transportedData
            }
        })
    }

};
// verify OTP from user

export const verifyOTPservice = async (data) => {
    const otp = data.otp;
    const userOTPverificatopRecords = await _Otp.find({ id })
    if (!userOTPverificatopRecords.length > 0) {
        // no record found
        throw new Error('No record was found for user  ${userOTPverificatopRecords} , please SIGNUP')
    }
    // user otp record exist

    //  FECTEH THE EXPIREDAT AND HASHEDOTP
    const { expiredAt } = userOTPverificatopRecords[0]

    const hashedOTP = userOTPverificatopRecords[0].otp

    if (expiredAt < Date.now()) {
        // otp record has expired
        await _Otp.deleteMany({ userId })

        throw new Error('Otp record has expired')
    }
    // compare the hasedotp and the otp;
    const validOTP = await bcrypt.hashSync(otp, hashedOTP);

    if (!validOTP) {

        throw Error('Invalid otp ');
        return false
    }
    const updatedOTP = await _Otp.updateOne({ _id: id, verified: true });

    const deletedRecord = await _Otp.deleteMany({ _id: id })
    if (!deletedRecord)
        return {
            status: "ERRO",
            message: "user OTP hs expired , please try again to request"

        }
    return {
        message: "Otp record has been deleted successfully"
    }

};



export const resendOTPVerification = async () => {
    const userOTPverificatopRecords = await _Otp.find({ userId })
    if (!userOTPverificatopRecords) {
        return "empty user details "

    }
    // delete existing records and resend ;
    _Otp.deleteMany({ _id: userId })
    // send the otp again
    sendOTPEmailVerification({ userId, Email })
};