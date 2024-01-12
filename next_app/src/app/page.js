'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';




export default function page() {
  return (
    <main className="home text-xl min-h-[100vh] flex items-center justify-center px-6 sm:pt-0 pt-32">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-600 opacity-[0.68]"></div>

      <div className="relative text-white text-center">
        <div className="container sm:text-2xl text-xl font-medium">


          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h2 className="sm:text-7xl text-5xl font-semibold  capitalize sm:mb-16 mb-8 text-center">Rincón Mágico Ghibli</h2>
          </motion.div>

          {/* Otros elementos, si los hay */}
        </div>
      </div>
    </main>
  );
}


