import express from 'express';
import shopsController from './shops'
import customerController from './customer'
import authController from './authentication'

const router = express.Router();

router.use('/auth', authController);
router.use('/shops', shopsController);
router.use('/user', customerController);

export default router