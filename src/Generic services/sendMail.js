import config from "../config";
import nodemailer from "nodemailer";
const { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_HEADER } = config
// let transporter = nodemailer.createTransport(options[, defaults])

// create a transporter 
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
    },
});

// test the transporter

transporter.verify((err, result) => {
    if (err) {
        console.log(err)

    }
    console.log(result)
    return result
})


