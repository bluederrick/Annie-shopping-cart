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


// send mail with defined transport object


// }

// main().catch(console.error);

// const sendMail = async (transporter, mailOptions) => {
//     try {
//         await transporter.sendMail(mailOptions)

//         console.log(`mail has been sent to successfully`)
//     } catch (e) {
//         console.log(e);
//     }
// };

// sendMail(transporter, mailOptions).then((res) => {
//     console.log(`mail sent successfully \n ${res},`);
// });