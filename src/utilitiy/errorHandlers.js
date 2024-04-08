

import jwt from "jsonwebtoken";
export const handleErrors = (err) => {
    console.log(err.message, err.name);

    // validation errors 

    if (err.message.includes('user validation failed') && err.message.includes('user invalid')) {
        const error = Object.values(err.errros).forEach((obj) => {
            return obj;

        })
    }

};

// export const HandleTokenErros = (err) => {
//     if (err instanceof jwt.JsonWebTokenError){
//         winston.error( )
//     }

// };
// export const HandleJwtTokenErrors = (err) => {
//     if (err instanceof jwt.JsonWebTokenError) {
//       winston.error(`JWT ->>> JsonWebTokenError: ${err} <<<`);
//       return returnResult(false, {
//         status: 401,
//         title: 'System Error',
//         message: 'Permission denied, Unauthorized access'
//       });
//     }
//     if (err instanceof jwt.TokenExpiredError) {
//       winston.error(`JWT ->>> TokenExpiredError: ${err} <<<`);
//       return returnResult(false, {
//         status: 401,
//         title: 'Authentication',
//         message: err.message
//       });
//     }


// jsonwebtoken

export const JWTError = () => { }; 