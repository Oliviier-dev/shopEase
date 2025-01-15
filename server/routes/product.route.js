import express from 'express';
import { ProductController } from '../controllers/index.js';
import { isAdmin } from '../utils/isAdmin.js';

const productRoute = express.Router();

productRoute.get('/search', ProductController.searchProducts);
productRoute.get('/', ProductController.getAllProducts);
productRoute.get('/:id', ProductController.getProductById);
productRoute.post('/add', isAdmin, ProductController.addProduct);
productRoute.delete('/delete/:id', isAdmin, ProductController.deleteProduct);

export default productRoute;
