class customError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.status = statusCode >= 400 && statusCode <= 500 ? 'fail' : 'error';

        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)
        //  stack  trace tells you where error has happenede in the code
    }
}


export default customError;