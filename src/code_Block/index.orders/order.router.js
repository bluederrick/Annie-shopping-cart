import express from 'express';
import {
  addOrderControllers,
  deleteOrderControllers,
  getAllOrderControllers
} from './order.controller.js';
import { adminAuthorized, authorizedUser } from '../../utilitiy/restrict.js';

const router = express.Router();

router.post('/orders/', authorizedUser, addOrderControllers);

router.delete('/DeleteOrder', adminAuthorized, deleteOrderControllers);

router.get('/Getorders', getAllOrderControllers);

export default router;
