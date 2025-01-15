import Cart from "../models/cart.model.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
process.env.STRIPE_SECRET_KEY

export const createCheckoutSession = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");

    if (!cart) return res.status(404).json({ message: "Cart is empty" });

    const totalPrice = cart.products.reduce((total, item) => {
      return total + item.productId.price * item.quantity;
    }, 0);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.products.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productId.name,
          },
          unit_amount: item.productId.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const paymentSuccess = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    await Cart.findOneAndDelete({ userId });

    res.status(200).json({ message: "Payment successful, cart cleared." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing payment." });
  }
};
