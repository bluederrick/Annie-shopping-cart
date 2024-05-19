import lodash from 'lodash';

const _ = lodash;

``;
class PaymentService {
  startPayment() {
    return new Promise(function (resolve, reject) {
      try {
        const form = _.pick(data, ['amount', 'email', fullName]);
        console.log(form);
      } catch (error) {
        return reject(error);
      }
    });
  }
}
