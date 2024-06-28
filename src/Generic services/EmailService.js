export const sendEmail = async (mailOptions) => {
    try {
        await transporter.sendEmail(mailOptions)
    } catch (e) {
    };
}