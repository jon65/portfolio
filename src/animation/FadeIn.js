// FadeIn.js

import { motion } from 'framer-motion';

const FadeIn = ({ children, duration = 3, delay = 0 }) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration, delay }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
