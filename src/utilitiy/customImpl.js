import error from './error.js';

// extends message class
class customError extends error {
  constructor(message, statusCode) {
    super(message);
    // super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode <= 500 ? 'fail' : 'error';
    this.isOperational = true;
    
    // this is an operational error not programme error
    // Error.captureStackTrace(this, this.constructor)
    //  stack  trace tells you where error has happenede in the code
  }
}
export default customError;
