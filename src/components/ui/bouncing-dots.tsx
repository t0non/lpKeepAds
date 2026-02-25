'use client';

import { motion } from 'framer-motion';

const BouncingDots = () => {
  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center gap-1.5"
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-emerald-400/60"
        variants={dotVariants}
      />
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-emerald-400/60"
        variants={dotVariants}
      />
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-emerald-400/60"
        variants={dotVariants}
      />
    </motion.div>
  );
};

export default BouncingDots;
