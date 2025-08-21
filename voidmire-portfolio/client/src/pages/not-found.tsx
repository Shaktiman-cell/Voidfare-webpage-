import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void-black flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-8xl font-black text-neon-purple mb-8">
            404
          </h1>
          <h2 className="font-orbitron text-2xl text-gray-300 mb-4">
            Lost in the Void
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for has drifted into the digital void. 
            Let's get you back to familiar territory.
          </p>
          <Link href="/">
            <motion.button
              className="bg-gradient-to-r from-neon-purple to-neon-cyan px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Voidmire
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}