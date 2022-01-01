import express from 'express';
import {
  transactions,
  verifiyTransactionPaymentRequest
} from '../Controllers/PaymentControllers.js';
const router = express.Router();

// initialize transaction
router.post('/api/v1/paystack/int', transactions);
// verify transactions
router.get('/api/v1/paystack/verify', verifiyTransactionPaymentRequest);
export default router;
