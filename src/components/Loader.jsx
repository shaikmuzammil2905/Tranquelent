import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-new.png';

const Loader = ({ onLoadingComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        if(onLoadingComplete) onLoadingComplete();
      }, 500); // Wait for exit animation
    }, 2000); // Display time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            <img src={logo} alt="Tranquelent Logo" className="h-12 md:h-16 mb-8 z-10 relative" />
            
            {/* Flash Effect */}
            <motion.div
              className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-0"
              animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.8, 1.5, 0.8]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <div className="w-48 h-1 bg-primary rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
