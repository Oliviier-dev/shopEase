import express from 'express';
import { createCheckoutSession, paymentSuccess } from '../utils/payment.js';
import { isAuthenticated } from "../utils/isAuthenticated.js";

const paymentRoute = express.Router();

paymentRoute.post('/create-checkout-session', isAuthenticated, createCheckoutSession);
paymentRoute.get("/payment/success", paymentSuccess);

export default paymentRoute;
