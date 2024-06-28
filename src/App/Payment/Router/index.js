import express from 'express';
import { transactions } from '../Controllers/PaymentControllers';
const router = express.Router();

// initialize transaction
router.post('/api/v1/paystack/verify', transactions);
// verify transactions 



