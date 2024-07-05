import express from 'express';
import {
  chargeAuthorization,
  fetchTransaction,
  listAllTransactions,
  transactions,
  verifiyTransactionPaymentRequest
} from '../Controllers/PaymentControllers.js';
const router = express.Router();

// initialize transaction
router.post('/api/v1/paystack/int', transactions);
router.get('/api/v1/paystack/verify', verifiyTransactionPaymentRequest);
router.get('/api/v1/paystack/listtransaction', listAllTransactions);
router.get('/api/v1/paystack/transaction/:id ', fetchTransaction);
router.post('/api/v1/paystack/chargeauthorization', chargeAuthorization);
export default router;
