import otpGenerator from 'otp-generator';

// generate(length, options)

export const GenerateOTP = (_num) => {
    const randomeOTP = otpGenerator
        .generate(_num,
            { upperCaseAlphabets: false, specialChars: false })


    return randomeOTP;
}



