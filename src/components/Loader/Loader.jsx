import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const text = "PORTFOLIO";
  
  return (
    <motion.div 
      className="loader"
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
      }}
    >
      <div className="loader-content">
        <div className="loader-logo">
          <motion.div
            className="loader-circle"
            animate={{
              rotate: 360,
              borderRadius: ['50%', '30%', '50%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.div
            className="loader-circle loader-circle-2"
            animate={{
              rotate: -360,
              borderRadius: ['30%', '50%', '30%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
        
        <div className="loader-text">
          {text.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="loader-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />

        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Loading experience...
        </motion.p>
      </div>

      {/* Background animated shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="loader-shape"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;