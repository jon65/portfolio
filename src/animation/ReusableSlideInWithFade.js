import { motion } from "framer-motion";

const ReusableSlideInWithFade = ({ y, children, duration = 0.5, delay = 0 }) => {
  const slideInVariants = {
    hidden: { y: y ?? "-100%", opacity: 0 }, // Adjust 'y' axis for top slide-in
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ duration, delay }}
      style={{
        position: "relative",
        height: "15%",
        textAlign: "left",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ReusableSlideInWithFade;
