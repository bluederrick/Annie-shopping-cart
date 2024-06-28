import { payStackInitialized } from '../Service/Services';
import https from 'https';
import axios from 'axios';
import * as R from 'ramda';
import { options } from '../../../Utilitiy/paymentUtils';

const SECRET_KEY = 'sk_test_73d6705c2145f945820a0884ef6a47597d77f551';
export const transactions = async (req, res) => {
  // const { amount, email, currency } = req.body;
   
  const clienTransactionaltDetails = JSON.stringify(req.body;);
  const initializedResult = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    clienTransactionaltDetails,
    options
  );
  // const reference_ = res_.data.data.reference
  const objId = R.path(['data', 'data'], initializedResult);
  const reference_Id = R.path(['reference'], objId);

  const intializationReferenceId = new payment({
    reference_Id
  });
  intializationReferenceId.save();

  if(!intializationReferenceId.save();){
    return ` referenceId  not saved to the database`;
  }
  if (!initializedResult) {
    return res.status(400).json({
      message: `initialization failed with error ${initializedResult}`,
      response:initializedResult,
      referencialId: reference_Id
    });
  }
  return res.status(200).json({ message: initializedResult.data, type: true });
};





// verify payment transaction details; 
export const verifiyTransactionPaymentRequest = async (req, res) => {
  const verifyOptions = {
    hostname: 'api.paystack.co',
    port: 443,
    headers: {
      Authorization: 'Bearer sk_test_73d6705c2145f945820a0884ef6a47597d77f551'
    }
  };
 
  // verify options
  console.log(reference_Id);
  const verifyTransaction = await axios.get(
    'https://api.paystack.co/transaction/verify/{reference_Id}',
    verifyOptions
  );
  if (!verifyTransaction) {
    throw new Error();
  } else {
    console.log('verified transaction successfully', verifyTransaction);
    return { data: verifyTransaction, type: true };
  }
};
app.use('/api/v1/paystack/verify', verifiyTransactionPaymentRequest);
console.log(Error);
app.listen(3000, function () {
  console.log('server is listeninig on port 3000');
});
