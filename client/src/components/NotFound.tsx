import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NotFoundImage from "../assets/404 Error-rafiki.svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <motion.img
        src={NotFoundImage}
        alt="404 Not Found"
        className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]" // Reduced sizes slightly
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
        Oops! Page Not Found
      </h3>

      <Link
        to="/"
        className="mt-4 px-5 py-2.5 text-white bg-[#0084D6] hover:bg-[#316d93] text-lg font-medium transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
