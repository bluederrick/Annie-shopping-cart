import express from 'express';
import {
  addOrderControllers,
  deleteOrderControllers
} from './order.controller.js';

const router = express.Router();

router.post('/orders/', addOrderControllers);

router.delete('/DeleteOrder', deleteOrderControllers);

export default router;
