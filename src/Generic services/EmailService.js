// import transporter from './sendMail.js'

// export const EmailService = {
//     sendEmailVerification: (email, otp) => {
//     }
// }


export const sendEmail = async (mailOptions) => {
    try {
        await transporter.sendEmail(mailOptions)

    } catch (e) {
    };
}