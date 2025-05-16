import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

export default function Confirmation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you a confirmation email with your order details shortly.
        </p>
        <Link
          to="/products"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </motion.div>
  );
}