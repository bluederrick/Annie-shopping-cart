import otpGenerator from 'otp-generator';
export const GenerateOTP = (_num) => {
    const randomeOTP = otpGenerator
        .generate(_num,
            { upperCaseAlphabets: false, specialChars: false })
    return randomeOTP;
}



