const paystack = (request) => {
  const mySecretKey = process.env.PAY_STACK_SECRET_KEY;
  const InitializePayment = (form, callback) => {
    const options = {
      url: 'https://api.paystack.co/transactions/intialization',
      headers: {
        authorization: MySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      form
    };
    const callback = (error, response, body) => {
      return callback(error, body);
    };
    request.post(options, callback);
  };

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url:
        'https://api/paystack.co/transaction/verify/' + encodeURICopmonent(ref),
      headers: {
        authorization: MySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      }
    };
    const callback = (error, response, body) => {
      return callback(error, body);
    };
    request.post(options, callback);
  };
  return { InitializePayment, verifyPayment };
};

export default paystack;
