import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to ShopQuest</h1>
        <p className="text-xl text-gray-600 mb-8">Discover amazing products at great prices</p>
        <Link
          to="/products"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          Shop Now
        </Link>
      </motion.div>
    </div>
  );
}