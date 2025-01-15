import express from 'express';
import userRoute from './user.route.js';
import productRoute from './product.route.js';
import cartRoute from './cart.route.js';
import paymentRoute from './payment.route.js';

const router = express.Router();

const routes = [
  { path: 'user', route: userRoute },
  { path: 'product', route: productRoute },
  { path: 'cart', route: cartRoute },
  { path: 'payment', route: paymentRoute },
];

routes.forEach(({ path, route }) => {
  router.use(`/api/v1/${path}`, route);
});

export default router;
