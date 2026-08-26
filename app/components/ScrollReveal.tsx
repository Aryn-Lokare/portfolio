"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.8
}) => {
  const getDirections = () => {
    switch (direction) {
      case 'up': return { y: 40 };
      case 'down': return { y: -40 };
      case 'left': return { x: 40 };
      case 'right': return { x: -40 };
      default: return {};
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getDirections() 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Premium cubic-bezier ease
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; gapDelay?: number }> = ({ 
  children,
  gapDelay = 0.15 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: gapDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
