import express from "express";
import { isAuthenticated } from "../utils/isAuthenticated.js";
import { CartController } from "../controllers/index.js";

const cartRoute = express.Router();

cartRoute.post("/add", isAuthenticated, CartController.addToCart);
cartRoute.delete(
  "/remove/:productId",
  isAuthenticated,
  CartController.removeFromCart,
);
cartRoute.get("/", isAuthenticated, CartController.viewCart);
cartRoute.put("/update", isAuthenticated, CartController.updateQuantity);
cartRoute.delete("/clear", isAuthenticated, CartController.clearCart);

export default cartRoute;
