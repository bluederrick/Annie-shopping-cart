import https from 'https';
import axios from 'axios';
import * as R from 'ramda';
import { options } from '../../../Utilitiy/paymentUtils.js';
import payment from '../../../Models/payment.js';
import { v4 as uuid } from 'uuid';

const SECRET_KEY = 'sk_test_73d6705c2145f945820a0884ef6a47597d77f551';
export const transactions = async (req, res) => {
  const { email, firstName, lastName, amount, currency, status } = req.body;

  const clienTransactionaltDetails = JSON.stringify({
    email,
    fullName: `${firstName + ' ' + lastName}`,
    amount,
    currency,
    status
  });
  console.log(clienTransactionaltDetails);
  const initializedResult = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    clienTransactionaltDetails,
    options
  );
  // const reference_ = res_.data.data.reference
  const objId = R.path(['data', 'data'], initializedResult);
  const reference_Id = R.path(['reference'], objId);
  const intializationReferenceId = await new payment({
    id: uuid(),
    email: email,
    fullName: `${firstName + ' ' + lastName}`,
    receiptId: reference_Id,
    amount: amount,
    currency: currency,
    status: status
  });
  console.log(reference_Id);
  await intializationReferenceId
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return err.stackTrace;
    });
  if (!intializationReferenceId.save()) {
    return `referenceId  not saved to the database`;
  }
  if (!initializedResult) {
    return res.status(400).json({
      message: `initialization failed with error ${initializedResult}`,
      response: initializedResult,
      referencialId: reference_Id
    });
  }
  return res.status(200).json({ message: initializedResult.data, type: true });
};
// verify payment transaction details;
export const verifiyTransactionPaymentRequest = async (req, res) => {
  // get referenceId from database
  const paymentDTO = await payment.find({});
  const reference = paymentDTO[0].receiptId;
  const verifyOptions = {
    port: 443,
    headers: {
      Authorization: 'Bearer sk_test_73d6705c2145f945820a0884ef6a47597d77f551'
    }
  };

  // verify options
  const verifyTransaction = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    verifyOptions
  );
  if (!verifyTransaction) {
    throw new Error();
    return error.stackTrace();
  }
  // console.log(verifyTransaction);

  return res.json({ data: verifyTransaction }).status(200);
  // return res.status(200).json({ verifyTransaction, type: true });
};

// lIST ALL TRANSACTIONS
export const listAllTransactions = async (req, res) => {
  const listOptions = {
    port: 443,
    headers: {
      Authorization: 'Bearer sk_test_73d6705c2145f945820a0884ef6a47597d77f551'
    }
  };

  const listTransaction = await axios.get(
    `https://api.paystack.co/transaction`,
    listOptions
  );
  if (!listTransaction) {
    return res.status(404);
    // .json({ message: 'error occured while getting request' });
  }

  console.log(listTransaction);
  return res.status(200);
};

export const fetchTransaction = async (req, res) => {
  const { id } = req.params;
  // check if id exist in the database
  const existId = await  payment.findById({ _id: id });
if(!existId ){
 return res.status(404).json({
  message:` invalid user id`
  type: false
 })
}
  const fetchMetdata = {
    port: 443,
    headers: {
      Authorization: 'Bearer sk_test_73d6705c2145f945820a0884ef6a47597d77f551'
    }
    const getTransaction = await axios.get(
    `https://api.paystack.co/transaction`,
    fetchMetdata
  );
  if (!getTransaction) {
    return res.status(404);
  }
  };
  console.log(getTransaction);
  return res.status(200);
};



// chargeAuthorization 
export const chargeAuthorization = async(req, res) => {
const charge_metadata = {
    port: 443,
    headers: {
      Authorization: 'Bearer sk_test_73d6705c2145f945820a0884ef6a47597d77f551',
      'Content-Type': 'application/json'
    }
  const chargeAuth= await axios.post({
    `https://api.paystack.co/transaction/charge_authorization`,
    charge_metadata 
  })
};
}