import express from 'express';
import { ProductController } from '../controllers/index.js';
import { isAdmin } from '../utils/isAdmin.js';

const productRoute = express.Router();

productRoute.post('/add', isAdmin, ProductController.addProduct);
productRoute.delete('/delete/:id', isAdmin, ProductController.deleteProduct);

export default productRoute;
