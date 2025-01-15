import express from 'express';
import userRoute from './user.route.js';
import productRoute from './product.route.js';

const router = express.Router();

const routes = [
  { path: 'user', route: userRoute },
  { path: 'product', route: productRoute },
];

routes.forEach(({ path, route }) => {
  router.use(`/api/v1/${path}`, route);
});

export default router;
