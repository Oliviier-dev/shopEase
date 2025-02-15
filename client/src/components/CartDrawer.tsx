import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import CartSkeleton from "./skeletons/CartSkeleton";
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";
import bgImage3 from "../assets/airpods-max-select-silver-202011.jpeg";
import bgImage4 from "../assets/store-card-40-ipad-pro-202405.jpeg";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setTimeout(() => {
        setCart([
          { id: 1, name: "Wireless Headphones", price: 99.99, image: bgImage1, quantity: 1 },
          { id: 2, name: "Smart Watch", price: 149.99, image: bgImage2, quantity: 2 },
          { id: 3, name: "Bluetooth Speaker", price: 59.99, image: bgImage3, quantity: 1 },
          { id: 4, name: "Gaming Mouse", price: 39.99, image: bgImage4, quantity: 3 },
        ]);
        setIsLoading(false);
      }, 2000);
    }
  }, [isOpen]);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[30%] bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 shadow-lg`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Your Cart</h2>
            <LiaTimesSolid
              className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-300"
              onClick={onClose}
            />
          </div>

          {/* Show Skeleton Loader when loading */}
          {isLoading ? (
            <CartSkeleton />
          ) : cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((product) => (
                <div key={product.id} className="flex items-center gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3
                      className="text-md font-medium text-black cursor-pointer hover:text-blue-800"
                      onClick={() => {
                        onClose();
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ${product.price.toFixed(2)} x {product.quantity}
                    </p>
                  </div>
                  <button onClick={() => removeItem(product.id)} className="ml-auto text-black hover:text-red-700">
                    <GoTrash className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}

          <div className="mt-6 text-lg font-medium flex justify-between">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="mt-6">
            <button
              className={`w-full bg-blue-600 text-white py-2 rounded transition-colors duration-300 ${
                cart.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
              disabled={cart.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default CartDrawer;
